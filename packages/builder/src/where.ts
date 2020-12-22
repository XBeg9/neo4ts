import { NodeStatementError } from './errors';
import { QueryDSL } from './interfaces';
import { createFactory, intersperse } from './utils';

export class NodeStatement implements QueryDSL {
  /** @internal */
  private _name!: string;

  /** @internal */
  private _label?: string;

  /** @internal */
  private _property?: string;

  name(n: string): this {
    this._name = n;
    return this;
  }

  label(n: string): this {
    this._label = n;
    return this;
  }

  property(n: string): this {
    this._property = n;
    return this;
  }

  getDSL(): string {
    if (this._label && this._property) {
      throw new NodeStatementError("can't have both label and property");
    }

    if (this._label) {
      return [this._name, this._label].filter(Boolean).join(':');
    }

    return [this._name, this._property].filter(Boolean).join('.');
  }
}

export const nodeStatement = createFactory(NodeStatement);

export type LeftRight = number | string | NodeStatement;

/** @internal */
function isDSL(o?: any): o is QueryDSL {
  return o && (o as QueryDSL).getDSL !== undefined;
}

export class ExistsOperator implements QueryDSL {
  /** @internal */
  private _node!: NodeStatement;

  node(n: NodeStatement): this {
    this._node = n;
    return this;
  }

  getDSL(): string {
    return `EXISTS(${this._node.getDSL()})`;
  }
}

export const existsOperator = createFactory(ExistsOperator);

export type Operator =
  | '='
  | '!='
  | '<'
  | '<='
  | '>'
  | '>='
  | '=~'
  | 'STARTS WITH'
  | 'ENDS WITH'
  | 'CONTAINS'
  | 'IS NOT NULL'
  | 'IS NULL'
  | ExistsOperator;

export class Statement implements QueryDSL {
  /** @internal */
  private _left!: LeftRight;

  /** @internal */
  private _operator?: Operator;

  /** @internal */
  private _right?: LeftRight | RegExp;

  /** @internal */
  private _negative?: boolean = false;

  node(l: LeftRight): this {
    this._left = l;
    return this;
  }

  eq(l: LeftRight, r: LeftRight): this {
    return this.basicOperator(l, '=', r);
  }

  notEq(l: LeftRight, r: LeftRight): this {
    return this.basicOperator(l, '!=', r);
  }

  gt(l: LeftRight, r: LeftRight): this {
    return this.basicOperator(l, '>', r);
  }

  gte(l: LeftRight, r: LeftRight): this {
    return this.basicOperator(l, '>=', r);
  }

  lt(l: LeftRight, r: LeftRight): this {
    return this.basicOperator(l, '<', r);
  }

  lte(l: LeftRight, r: LeftRight): this {
    return this.basicOperator(l, '<=', r);
  }

  startsWith(l: LeftRight, r: string): this {
    return this.basicOperator(l, 'STARTS WITH', r);
  }

  endsWith(l: LeftRight, r: string): this {
    return this.basicOperator(l, 'ENDS WITH', r);
  }

  contains(l: LeftRight, r: string): this {
    return this.basicOperator(l, 'CONTAINS', r);
  }

  regexp(l: LeftRight, r: RegExp): this {
    return this.basicOperator(l, '=~', r);
  }

  exists(node: NodeStatement): this {
    this._operator = existsOperator().node(node);
    return this;
  }

  null(node: NodeStatement): this {
    this._left = node;
    this._operator = this._negative ? 'IS NOT NULL' : 'IS NULL';
    return this;
  }

  not(): this {
    this._negative = true;
    return this;
  }

  getDSL(): string {
    return [
      this._negative ? (this._right ? 'NOT' : '') : undefined,
      this._sideDsl(this._left),
      isDSL(this._operator) ? this._operator.getDSL() : this._operator,
      this._sideDsl(this._right)
    ]
      .filter(Boolean)
      .join(' ');
  }

  /** @internal */
  private basicOperator(
    l: LeftRight,
    op: Operator,
    r: LeftRight | RegExp
  ): this {
    this._left = l;
    this._operator = op;
    this._right = r;
    return this;
  }

  /** @internal */
  private _sideDsl(obj?: LeftRight | RegExp): string | undefined {
    if (!obj) {
      return undefined;
    }

    return obj instanceof NodeStatement
      ? obj.getDSL()
      : typeof obj !== 'number'
      ? `'${obj}'`
      : obj.toString();
  }
}

export const statement = createFactory(Statement);

abstract class StatementOperator implements QueryDSL {
  private _op: string;

  constructor(op: string) {
    this._op = op;
  }

  getDSL() {
    return this._op;
  }
}

export class OrStatementOperator extends StatementOperator {
  constructor() {
    super('OR');
  }
}

export class AndStatementOperator extends StatementOperator {
  constructor() {
    super('AND');
  }
}

export class XorStatementOperator extends StatementOperator {
  constructor() {
    super('XOR');
  }
}

export class Where implements QueryDSL {
  private _statements: Array<Array<Statement | StatementOperator>> = [];

  or(statements: Statement[] = []): this {
    return this.addStatement(new OrStatementOperator(), statements);
  }

  and(statements: Statement[] = []): this {
    return this.addStatement(new AndStatementOperator(), statements);
  }

  xor(statements: Statement[] = []): this {
    return this.addStatement(new XorStatementOperator(), statements);
  }

  getDSL(): string {
    return `WHERE ${this._statements
      .map(s =>
        this._statements.length > 1
          ? s.length > 1
            ? `(${s.map(t => t.getDSL()).join(' ')})`
            : s[0].getDSL()
          : s.map(t => t.getDSL()).join(' ')
      )
      .join(' ')}`;
  }

  private addStatement(
    operator: StatementOperator,
    statements: Statement[] = []
  ): this {
    if (statements.length) {
      this._statements.push(intersperse(statements, () => operator));
    } else {
      this._statements.push([operator]);
    }

    return this;
  }
}

export const where = createFactory(Where);

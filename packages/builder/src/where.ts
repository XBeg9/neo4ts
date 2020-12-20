import { NodeStatementError } from './errors';
import { createFactory } from './utils';

export class NodeStatement {
  private _name!: string;
  private _label?: string;
  private _property?: string;

  name(n: string) {
    this._name = n;
    return this;
  }

  label(n: string) {
    this._label = n;
    return this;
  }

  property(n: string) {
    this._property = n;
    return this;
  }

  getDSL() {
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

type LeftRight = number | string | NodeStatement;

export interface QueryDSL {
  getDSL(): string;
}

function isDSL(o?: any): o is QueryDSL {
  return o && (o as QueryDSL).getDSL !== undefined;
}

export class ExistsOperator implements QueryDSL {
  private _node!: NodeStatement;

  node(n: NodeStatement) {
    this._node = n;
    return this;
  }

  getDSL() {
    return `EXISTS(${this._node.getDSL()})`;
  }
}

export const existsOperator = createFactory(ExistsOperator);

type Operator =
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

export class Statement {
  private _left!: LeftRight;
  private _operator?: Operator;
  private _right?: LeftRight | RegExp;
  private _negative?: boolean = false;

  node(l: LeftRight) {
    this._left = l;
    return this;
  }

  eq(l: LeftRight, r: LeftRight) {
    return this.basicOperator(l, '=', r);
  }

  notEq(l: LeftRight, r: LeftRight) {
    return this.basicOperator(l, '!=', r);
  }

  gt(l: LeftRight, r: LeftRight) {
    return this.basicOperator(l, '>', r);
  }

  gte(l: LeftRight, r: LeftRight) {
    return this.basicOperator(l, '>=', r);
  }

  lt(l: LeftRight, r: LeftRight) {
    return this.basicOperator(l, '<', r);
  }

  lte(l: LeftRight, r: LeftRight) {
    return this.basicOperator(l, '<=', r);
  }

  startsWith(l: LeftRight, r: string) {
    return this.basicOperator(l, 'STARTS WITH', r);
  }

  endsWith(l: LeftRight, r: string) {
    return this.basicOperator(l, 'ENDS WITH', r);
  }

  contains(l: LeftRight, r: string) {
    return this.basicOperator(l, 'CONTAINS', r);
  }

  regexp(l: LeftRight, r: RegExp) {
    return this.basicOperator(l, '=~', r);
  }

  exists(node: NodeStatement) {
    this._operator = existsOperator().node(node);
    return this;
  }

  null(node: NodeStatement) {
    this._left = node;
    this._operator = this._negative ? 'IS NOT NULL' : 'IS NULL';
    return this;
  }

  not() {
    this._negative = true;
    return this;
  }

  getDSL() {
    return [
      this._negative ? (this._right ? 'NOT' : '') : undefined,
      this._sideDsl(this._left),
      isDSL(this._operator) ? this._operator.getDSL() : this._operator,
      this._sideDsl(this._right)
    ]
      .filter(Boolean)
      .join(' ');
  }

  private basicOperator(l: LeftRight, op: Operator, r: LeftRight | RegExp) {
    this._left = l;
    this._operator = op;
    this._right = r;
    return this;
  }

  private _sideDsl(obj?: LeftRight | RegExp) {
    return obj instanceof NodeStatement
      ? obj.getDSL()
      : obj && typeof obj !== 'number'
      ? `'${obj}'`
      : obj;
  }
}

export const statement = createFactory(Statement);

export class Where {
  // or() {

  // }

  // and() {

  // }

  // not() {

  // }

  // xor() {

  // }

  getDSL() {
    return `WHERE`;
  }
}

export const where = createFactory(Where);

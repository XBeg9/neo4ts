import { QueryDSL } from './interfaces';
import { Match } from './match';
import { createFactory } from './utils';
import { withAlias } from './with-alias';

export class Column implements QueryDSL {
  /** @internal */
  private _name!: string;

  /** @internal */
  private _property?: string;

  name(name: string) {
    this._name = name;
    return this;
  }

  property(property: string) {
    this._property = property;
    return this;
  }

  getDSL(): string {
    if (!this._name) {
      return '';
    }
    return `${[this._name, this._property].filter(Boolean).join('.')}`;
  }
}

export class ColumnProjection implements QueryDSL {
  /** @internal */
  private _name!: string;

  /** @internal */
  private _nested = false;

  /** @internal */
  private _properties: Array<string | ColumnProjection> = [];

  name(name: string) {
    this._name = name;
    return this;
  }

  properties(objects: string | Array<string | ColumnProjection>): this {
    this._properties = [
      ...this._properties,
      ...(Array.isArray(objects) ? objects : [objects])
    ];
    return this;
  }

  getDSL(): string {
    return `${this._nested ? `${this._name}:` : this._name} { ${this._properties
      .filter(Boolean)
      .map(p => this.printProperty(p))
      .join(', ')} }`;
  }

  private printProperty(object: string | ColumnProjection): string {
    if (object instanceof ColumnProjection) {
      object._nested = true;
      return object.getDSL();
    } else {
      return `.${object}`;
    }
  }
}

export class ColumnList implements QueryDSL {
  /** @internal */
  private _selection!: Match;

  /** @internal */
  private _pipe!: Array<Column> | ColumnProjection;

  select(object: Match): this {
    this._selection = object.nested(true);
    return this;
  }

  pipe(objects: Array<Column> | ColumnProjection) {
    this._pipe = objects;
    return this;
  }

  getDSL(): string {
    return `[${this._selection.getDSL()} | ${this.printPipe()}]`;
  }

  private printPipe(): string {
    if (Array.isArray(this._pipe)) {
      return this._pipe.map((p: Column) => p.getDSL()).join(', ');
    } else {
      return this._pipe.getDSL();
    }
  }
}

export const column = createFactory(withAlias(Column));
export const col = column;

export const projection = createFactory(withAlias(ColumnProjection));
export const proj = projection;

export const list = createFactory(withAlias(ColumnList));

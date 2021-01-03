import { QueryDSL } from './interfaces';
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
  private _properties: string[] = [];

  name(name: string) {
    this._name = name;
    return this;
  }

  properties(objects: string | string[]): this {
    this._properties = [
      ...this._properties,
      ...(Array.isArray(objects) ? objects : [objects])
    ];
    return this;
  }

  getDSL(): string {
    return `${this._name} { ${this._properties
      .filter(Boolean)
      .map(p => `.${p}`)
      .join(', ')} }`;
  }
}

export const column = createFactory(withAlias(Column));
export const col = column;
export const projection = createFactory(withAlias(ColumnProjection));
export const proj = projection;

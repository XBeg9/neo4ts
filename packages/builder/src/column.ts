import { QueryDSL } from './interfaces';
import { createFactory } from './utils';

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

export class ColumnWithAlias extends Column {
  /** @internal */
  private _alias?: string;

  alias(alias: string) {
    this._alias = alias;
    return this;
  }

  getDSL() {
    return [super.getDSL(), this._alias && `AS ${this._alias}`]
      .filter(Boolean)
      .join(' ');
  }
}

export const column = createFactory(ColumnWithAlias);
export const col = column;

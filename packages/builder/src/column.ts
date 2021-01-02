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
    return `${[this._name, this._property].filter(Boolean).join('.')}`;
  }
}

export const column = createFactory(Column);
export const col = column;

import { MaxHopsError } from './errors';
import { QueryDSL } from './interfaces';
import { createFactory } from './utils';

export enum NodeRelationDirection {
  IN = '->',
  OUT = '<-',
  UNI = '-'
}

export class NodeRelation implements QueryDSL {
  /** @internal */
  private _direction = NodeRelationDirection.UNI;

  /** @internal */
  private _variable?: string;

  /** @internal */
  private _types: string[] = [];

  /** @internal */
  private _minHops?: number;

  /** @internal */
  private _maxHops?: number;

  in(): this {
    this._direction = NodeRelationDirection.IN;
    return this;
  }

  out(): this {
    this._direction = NodeRelationDirection.OUT;
    return this;
  }

  uni(): this {
    this._direction = NodeRelationDirection.UNI;
    return this;
  }

  variable(name: string): this {
    this._variable = name;
    return this;
  }

  minHops(hops: number): this {
    this._minHops = hops;
    return this;
  }

  maxHops(hops: number): this {
    this._maxHops = hops;
    return this;
  }

  type(type: string): this {
    return this.types([type]);
  }

  types(types: string[]): this {
    this._types = [...this._types, ...types];
    return this;
  }

  getDSL(): string {
    if (!this._maxHops && this._minHops !== undefined) {
      throw new MaxHopsError();
    }

    const hops = this._maxHops
      ? `*${[this._minHops, this._maxHops]
          .filter(h => h !== undefined)
          .join('..')}`
      : '';

    const escapeType = (obj: string) =>
      /[^\w]/.test(obj) ? `\`${obj}\`` : obj;

    const varWithTypeAndHops =
      this._variable || this._types.length > 0 || hops
        ? `[${[
            this._variable ? this._variable : '',
            this._types.length > 0
              ? this._types.map(escapeType).join('|')
              : undefined
          ]
            .filter(t => t !== undefined)
            .join(':')}${hops}]`
        : '';

    return this._direction !== NodeRelationDirection.OUT
      ? `-${varWithTypeAndHops}${this._direction}`
      : `${this._direction}${varWithTypeAndHops}-`;
  }
}

export const nodeRelation = createFactory(NodeRelation);

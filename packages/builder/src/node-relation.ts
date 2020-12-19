import { createFactory } from './utils';

export class MaxHopsError extends Error {
  constructor() {
    super("maxHops can't be set without minHops");
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

enum NodeRelationDirection {
  IN = '->',
  OUT = '<-',
  UNI = '-'
}

export class NodeRelation {
  private _direction = NodeRelationDirection.UNI;
  private _variable?: string;
  private _types: string[] = [];
  private _minHops?: number;
  private _maxHops?: number;

  in() {
    this._direction = NodeRelationDirection.IN;
    return this;
  }

  out() {
    this._direction = NodeRelationDirection.OUT;
    return this;
  }

  uni() {
    this._direction = NodeRelationDirection.UNI;
    return this;
  }

  variable(name: string) {
    this._variable = name;
    return this;
  }

  minHops(hops: number) {
    this._minHops = hops;
    return this;
  }

  maxHops(hops: number) {
    this._maxHops = hops;
    return this;
  }

  type(type: string) {
    return this.types([type]);
  }

  types(types: string[]) {
    this._types = [...this._types, ...types];
    return this;
  }

  getDSL() {
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

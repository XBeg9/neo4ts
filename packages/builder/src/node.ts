import { createFactory } from './utils';

export class Node {
  private _name = '';
  private _label?: string;
  private _where: Record<string, string>[] = [];

  name(name: string) {
    this._name = name;
    return this;
  }

  label(label: string) {
    this._label = label;
    return this;
  }

  where(where: Record<string, string> | Record<string, string>[]) {
    this._where = [...this._where, ...(Array.isArray(where) ? where : [where])];
    return this;
  }

  getDSL() {
    return this._label
      ? `(${[this._name, this._label].join(':')}${this.whereDsl()})`
      : `(${this._name}${this.whereDsl()})`;
  }

  private whereDsl() {
    const object = this._where.reduce((a, b) => ({ ...a, ...b }), {});

    return Object.keys(object).length > 0
      ? ` { ${Object.keys(object)
          .map(key => `${key}: '${object[key]}'`)
          .join(', ')} }`
      : '';
  }
}

export const node = createFactory(Node);

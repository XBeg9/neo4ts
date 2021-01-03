import { QueryDSL } from './interfaces';

type Constructor<T> = new (...args: any[]) => T;

export function withAlias<T extends Constructor<QueryDSL>>(Base: T) {
  abstract class ClassWithAlias extends Base {
    /** @internal */
    _alias?: string;

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

  return ClassWithAlias;
}

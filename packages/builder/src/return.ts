import { NodeWithParam } from './node-with-param';
import { createFactory } from './utils';

export class Return extends NodeWithParam {
  private _all: boolean = false;

  all() {
    this._all = true;
    return this;
  }

  getDSL() {
    if (this._all) {
      return 'RETURN *';
    }

    return `RETURN ${super.getDSL()}`;
  }
}

export const returns = createFactory(Return);

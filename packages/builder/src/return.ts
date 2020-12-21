import { NodeWithParam } from './node-with-param';
import { createFactory } from './utils';

/**
 * The RETURN clause defines what to include in the query result set.
 *
 * @example
 * When you want to return all nodes, relationships and paths found in a query, you can use the `.all()` symbol.
 * ```javascript {5}
 * import * as n from '@neo4ts/query-builder';
 * 
 * n.query()
 *      .match(n.match().nodes([node().name('n').label('Label')]))
 *      .return(n.returns().all())
 *      .build();
 * ```
 */
export class Return extends NodeWithParam {
  /** @internal */
  private _all: boolean = false;

  /**
   * Return all elements
   */
  all(): this {
    this._all = true;
    return this;
  }

  getDSL(): string {
    if (this._all) {
      return 'RETURN *';
    }

    return `RETURN ${super.getDSL()}`;
  }
}

export const returns = createFactory(Return);

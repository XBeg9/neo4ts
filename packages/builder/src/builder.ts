import { Match, OptionalMatch } from './match';
import { OrderBy } from './order-by';
import { Return } from './return';
import { createFactory } from './utils';

/**
 * Starting point of any query builder functionality
 *
 * @public
 */
export class QueryBuilder {
  /** @internal */
  private _match!: Match;

  /** @internal */
  private _optionalMatch?: OptionalMatch;

  /** @internal */
  private _return!: Return;

  /** @internal */
  private _orderby?: OrderBy;

  /** @internal */
  private _limit?: string | number;

  /** @internal */
  private _skip?: string | number;

  /**
   * Adds a MATCH query to builder
   *
   * @param match Instance of Match class
   */
  match(match: Match): this {
    this._match = match;
    return this;
  }

  /**
   * Adds an OPTIONAL MATCH query to builder
   *
   * @param match Instance of OptionalMatch class
   */
  optionalMatch(match: OptionalMatch): this {
    this._optionalMatch = match;
    return this;
  }

  /**
   * Adds RETURN clause definition to builder
   *
   * @param rt Instance of Return class
   */
  return(rt: Return): this {
    this._return = rt;
    return this;
  }

  /**
   * Adds LIMIT constrains the number of rows in the output.
   *
   * LIMIT accepts any expression that evaluates to a positive integer — however the expression cannot refer to nodes or relationships.
   *
   * @example
   * Return a subset of the rows
   * ```javascript {4}
   * import * as n from '@neo4ts/query-builder';
   *
   * n.query()
   *    .match(n.match().nodes([node().name('n').label('Label')]))
   *    .return(n.returns().nodes({ name: 'n' }))
   *    .limit(5)
   *    .build()
   * ```
   *
   * @example
   * Using an expression with LIMIT to return a subset of the rows
   * ```javascript {4}
   * import * as n from '@neo4ts/query-builder';
   *
   * n.query()
   *    .match(n.match().nodes([node().name('n').label('Label')]))
   *    .return(n.returns().nodes({ name: 'n' }))
   *    .limit('toInteger(3 * rand())+ 1')
   *    .build()
   * ```
   *
   * @param limit number of records or expression
   */
  limit(limit: string | number): this {
    this._limit = limit;
    return this;
  }

  /**
   * Adds SKIP definition to builder
   *
   * @param skip number or expression
   */
  skip(skip: string | number): this {
    this._skip = skip;
    return this;
  }

  /**
   * Adds ORDER BY statement to query builder.
   * ORDER BY is a sub-clause following RETURN or WITH, and it specifies that the output should be sorted and how.
   *
   * @remarks
   * Note that you cannot sort on nodes or relationships, just on properties on these.
   *
   * @example
   * Order nodes in descending order
   * ```javascript
   * import * as n from '@neo4ts/query-builder';
   *
   * n.query()
   *      .match(n.match().nodes([node().name('n').label('Label')]))
   *      .return(n.returns().nodes({ name: 'n' }))
   *      .orderBy(n.orderBy().nodes({ name: 'n', property: 'p' }).desc())
   *      .build();
   * ```
   *
   * @example
   * Order nodes by multiple properties
   * ```javascript
   * import * as n from '@neo4ts/query-builder';
   *
   * n.query()
   *      .match(n.match().nodes([node().name('n').label('Label')]))
   *      .return(n.returns().nodes({ name: 'n' }))
   *      .orderBy(n.orderBy().nodes([{ name: 'n', property: 'name' }, { name: 'n', property: 'title' }]))
   *      .build();
   * ```
   * @param orderBy instance of OrderBy class
   */
  orderBy(orderBy: OrderBy): this {
    this._orderby = orderBy;
    return this;
  }

  /**
   *  Builds the query from all provided definitions and returns the Cypher
   */
  build(): string {
    return [
      this._match.getDSL(),
      this._optionalMatch?.getDSL(),
      this._return.getDSL(),
      this._orderby?.getDSL(),
      this._skip ? `SKIP ${this._skip}` : undefined,
      this._limit ? `LIMIT ${this._limit}` : undefined
    ]
      .filter(Boolean)
      .join(' ');
  }
}

export const query = createFactory(QueryBuilder);

import { Match, OptionalMatch } from './match';
import { OrderBy } from './order-by';
import { Return } from './return';
import { createFactory } from './utils';

/**
 *
 * @export
 * @class QueryBuilder
 *
 * @public
 */
export class QueryBuilder {
  private _match!: Match;

  private _optionalMatch?: OptionalMatch;

  private _return!: Return;

  private _orderby?: OrderBy;

  private _limit?: string | number;

  private _skip?: string | number;

  /**
   * Adds a MATCH query to builder
   *
   * @param Match - match
   * @returns QueryBuilder class (self)
   */
  match(match: Match): QueryBuilder {
    this._match = match;
    return this;
  }

  /**
   * Adds an OPTIONAL MATCH query to builder
   *
   * @param OptionalMatch match
   * @returns QueryBuilder class (self)
   */
  optionalMatch(match: OptionalMatch): QueryBuilder {
    this._optionalMatch = match;
    return this;
  }

  /**
   * Adds RETURN clause definition to builder
   *
   * @param {Return} rt
   * @returns QueryBuilder class (self)
   */
  return(rt: Return): QueryBuilder {
    this._return = rt;
    return this;
  }

  /**
   * Adds LIMIT clause to builder
   *
   * @example
   * Using number as input
   * ```javascript {4}
   * query()
   *    .match(match().nodes([node().name('n').label('Label')]))
   *    .return(returns().nodes({ name: 'n' }))
   *    .limit(5)
   *    .build()
   * ```
   *
   * @example
   * Using expression
   * ```javascript  {4}
   * query()
   *    .match(match().nodes([node().name('n').label('Label')]))
   *    .return(returns().nodes({ name: 'n' }))
   *    .limit('toInteger(3 * rand())+ 1')
   *    .build()
   * ```
   *
   * @param limit - Limit by number of records or expression
   * @returns QueryBuilder class (self)
   */
  limit(limit: string | number): QueryBuilder {
    this._limit = limit;
    return this;
  }

  /**
   * Adds SKIP definition to builder
   *
   * @param {(string | number)} skip
   * @returns QueryBuilder class (self)
   */
  skip(skip: string | number): QueryBuilder {
    this._skip = skip;
    return this;
  }

  /**
   * Adds ORDER BY definition to builder
   *
   * @param {OrderBy} orderBy
   * @returns QueryBuilder class (self)
   */
  orderBy(orderBy: OrderBy): QueryBuilder {
    this._orderby = orderBy;
    return this;
  }

  /**
   *  Builds the query from all provided definitions and returns Cypher
   *
   * @returns QueryBuilder class (self)
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

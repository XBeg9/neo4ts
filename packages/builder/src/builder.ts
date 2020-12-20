import { Match, OptionalMatch } from './match';
import { OrderBy } from './order-by';
import { Return } from './return';
import { createFactory } from './utils';

export class QueryBuilder {
  private _match!: Match;
  private _optionalMatch?: OptionalMatch;
  private _return!: Return;
  private _orderby?: OrderBy;
  private _limit?: string | number;
  private _skip?: string | number;

  match(match: Match) {
    this._match = match;
    return this;
  }

  optionalMatch(match: OptionalMatch) {
    this._optionalMatch = match;
    return this;
  }

  return(rt: Return) {
    this._return = rt;
    return this;
  }

  limit(limit: string | number) {
    this._limit = limit;
    return this;
  }

  skip(skip: string | number) {
    this._skip = skip;
    return this;
  }

  orderBy(orderBy: OrderBy) {
    this._orderby = orderBy;
    return this;
  }

  build() {
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

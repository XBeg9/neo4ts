import { Column } from './column';
import { createFactory } from './utils';

export class OrderBy {
  /** @internal */
  private _direction?: 'DESC';

  /** @internal */
  private _columns: Column[] = [];

  columns(objects: Column | Column[]): this {
    this._columns = [
      ...this._columns,
      ...(Array.isArray(objects) ? objects : [objects])
    ];
    return this;
  }

  desc(): this {
    this._direction = 'DESC';
    return this;
  }

  getDSL(): string {
    return `ORDER BY ${[
      this._columns.map(c => c.getDSL()).join(', '),
      this._direction
    ]
      .filter(Boolean)
      .join(' ')}`;
  }
}

export const orderBy = createFactory(OrderBy);

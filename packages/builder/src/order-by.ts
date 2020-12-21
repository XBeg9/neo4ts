import { QueryDSL } from './interfaces';
import { NodeWithParam, NodeWithProperty } from './node-with-param';
import { createFactory } from './utils';

export class OrderBy extends NodeWithParam {
  /** @internal */
  private _direction?: 'DESC';

  nodes(nodes: Required<NodeWithProperty> | Required<NodeWithProperty>[]): this {
    super.nodes(nodes);
    return this;
  }

  desc(): this {
    this._direction = 'DESC';
    return this;
  }

  getDSL(): string {
    return `ORDER BY ${[super.getDSL(), this._direction]
      .filter(Boolean)
      .join(' ')}`;
  }
}

export const orderBy = createFactory(OrderBy);

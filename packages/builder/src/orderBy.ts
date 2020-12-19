import { NodeWithParam, NodeWithProperty } from './node-with-param';
import { createFactory } from './utils';

export class OrderBy extends NodeWithParam {
  private _direction?: 'DESC';

  nodes(nodes: Required<NodeWithProperty> | Required<NodeWithProperty>[]) {
    super.nodes(nodes);
    return this;
  }

  desc() {
    this._direction = 'DESC';
    return this;
  }

  getDSL() {
    return `ORDER BY ${[super.getDSL(), this._direction]
      .filter(Boolean)
      .join(' ')}`;
  }
}

export const orderBy = createFactory(OrderBy);

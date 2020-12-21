import { QueryDSL } from "./interfaces";

export interface NodeWithProperty {
  name: string;
  property?: string;
}

export class NodeWithParam implements QueryDSL {
  /** @internal */
  private _nodes: NodeWithProperty[] = [];

  nodes(nodes: NodeWithProperty | NodeWithProperty[]): this {
    this._nodes = [...this._nodes, ...(Array.isArray(nodes) ? nodes : [nodes])];
    return this;
  }

  getDSL(): string {
    return this._nodes
      .map(n => `${[n.name, n.property].filter(Boolean).join('.')}`)
      .join(', ');
  }
}

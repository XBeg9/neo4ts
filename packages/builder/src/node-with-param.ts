export interface NodeWithProperty {
  name: string;
  property?: string;
}

export class NodeWithParam {
  private _nodes: NodeWithProperty[] = [];

  nodes(nodes: NodeWithProperty | NodeWithProperty[]) {
    this._nodes = [...this._nodes, ...(Array.isArray(nodes) ? nodes : [nodes])];
    return this;
  }

  getDSL() {
    return this._nodes
      .map(n => `${[n.name, n.property].filter(Boolean).join('.')}`)
      .join(', ');
  }
}

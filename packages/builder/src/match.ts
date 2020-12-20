import { EmptyNodesError } from './errors';
import { Node } from './node';
import { NodeRelation } from './node-relation';
import { createFactory } from './utils';

class MatchBase {
  protected _nodesAndRelations: Array<Node | NodeRelation> = [];

  nodes(nodes: Array<Node | NodeRelation>) {
    this._nodesAndRelations = [...this._nodesAndRelations, ...nodes];
    return this;
  }

  node(node: Node) {
    return this.nodes([node]);
  }

  related(related: NodeRelation) {
    return this.nodes([related]);
  }

  getDSL() {
    if (this._nodesAndRelations.length === 0) {
      throw new EmptyNodesError();
    }

    return this._nodesAndRelations.reduce((res, curr, idx) => {
      if (idx === 0) {
        return (res += curr.getDSL());
      }

      if (
        curr instanceof Node &&
        this._nodesAndRelations[idx - 1] instanceof Node
      ) {
        res += `, ${curr.getDSL()}`;
      } else {
        res += `${curr.getDSL()}`;
      }
      return res;
    }, '');
  }
}

export class Match extends MatchBase {
  getDSL() {
    return `MATCH ${super.getDSL()}`;
  }
}

export const match = createFactory(Match);

export class OptionalMatch extends MatchBase {
  getDSL() {
    return `OPTIONAL MATCH ${super.getDSL()}`;
  }
}

export const optionalMatch = createFactory(OptionalMatch);

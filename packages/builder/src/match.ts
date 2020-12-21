import { EmptyNodesError } from './errors';
import { QueryDSL } from './interfaces';
import { Node } from './node';
import { NodeRelation } from './node-relation';
import { createFactory } from './utils';

/**
 * Base class for Match and OptionalMatch
 *
 * @internal
 */
abstract class MatchBase implements QueryDSL {
  /** @internal */
  protected _nodesAndRelations: Array<Node | NodeRelation> = [];

  /**
   * Add nodes to be added into MATCH clause
   *
   * @param nodes nodes to be matched
   */
  nodes(nodes: Array<Node | NodeRelation>): this {
    this._nodesAndRelations = [...this._nodesAndRelations, ...nodes];
    return this;
  }

  node(node: Node): this {
    return this.nodes([node]);
  }

  related(related: NodeRelation): this {
    return this.nodes([related]);
  }

  getDSL(): string {
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

/**
 * The MATCH clause is used to search for the pattern described in it.
 *
 * @public
 */
export class Match extends MatchBase {
  getDSL(): string {
    return `MATCH ${super.getDSL()}`;
  }
}

/**
 * Factory method for Match class
 */
export const match = createFactory(Match);

/**
 * The OPTIONAL MATCH clause is used to search for the pattern described in it, while using nulls for missing parts of the pattern.
 *
 * @public
 */
export class OptionalMatch extends MatchBase {
  getDSL(): string {
    return `OPTIONAL MATCH ${super.getDSL()}`;
  }
}

/**
 * Factory method for OptionalMatch class
 */
export const optionalMatch = createFactory(OptionalMatch);

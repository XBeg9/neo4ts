/**
 * Node Statement
 *
 * @export
 * @class NodeStatementError
 * @extends {Error}
 */
export class NodeStatementError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 *  EmptyNodesError must be trigger when match query is empty
 *
 * @export
 * @class EmptyNodesError
 * @extends {Error}
 */
export class EmptyNodesError extends Error {
  constructor() {
    super("Match.nodes can't be empty");
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class MaxHopsError extends Error {
  constructor() {
    super("maxHops can't be set without minHops");
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

import { EmptyNodesError } from '../errors';
import { match, optionalMatch } from '../match';
import { node } from '../node';
import { nodeRelation } from '../node-relation';

describe('MATCH', () => {
  it('throw error if empty nodes', () => {
    expect(() => match().getDSL()).toThrow(EmptyNodesError);
  });

  it('node', () => {
    expect(match().node(node().name('n').label('Label')).getDSL()).toBe(
      'MATCH (n:Label)'
    );
  });

  it('nested', () => {
    expect(
      match().nested(true).node(node().name('n').label('Label')).getDSL()
    ).toBe('(n:Label)');
  });

  it('nodes', () => {
    expect(
      match()
        .nodes([node().name('a').label('A'), node().name('b').label('B')])
        .getDSL()
    ).toBe('MATCH (a:A), (b:B)');
  });

  it('multi node set', () => {
    expect(
      match()
        .node(node().name('a').label('A'))
        .node(node().name('b').label('B'))
        .getDSL()
    ).toBe('MATCH (a:A), (b:B)');
  });

  describe('relation', () => {
    it('empty', () => {
      expect(
        match()
          .node(node().name('a'))
          .related(nodeRelation().in())
          .node(node().name('b'))
          .getDSL()
      ).toBe('MATCH (a)-->(b)');
    });

    it('with relation and separate node selection', () => {
      expect(
        match()
          .node(node().name('a'))
          .related(nodeRelation().in())
          .node(node().name('b'))
          .node(node().name('c'))
          .getDSL()
      ).toBe('MATCH (a)-->(b), (c)');
    });

    it('with variable and type', () => {
      expect(
        match()
          .node(node().name('a'))
          .related(nodeRelation().in().variable('r').type('ACTED_IN'))
          .node(node().name('b'))
          .getDSL()
      ).toBe('MATCH (a)-[r:ACTED_IN]->(b)');
    });

    it('bound relationship', () => {
      expect(
        match()
          .node(node().name('a'))
          .related(nodeRelation().variable('r'))
          .node(node().name('b'))
          .getDSL()
      ).toBe('MATCH (a)-[r]-(b)');
    });

    // https://neo4j.com/docs/cypher-manual/current/clauses/match/#multiple-rels
    it('multi relationship', () => {
      expect(
        match()
          .node(node().name('person'))
          .related(nodeRelation().type('ACTED_IN').in())
          .node(node().name('movie'))
          .related(nodeRelation().type('DIRECTED').out())
          .node(node().name('director'))
          .getDSL()
      ).toBe('MATCH (person)-[:ACTED_IN]->(movie)<-[:DIRECTED]-(director)');
    });
  });
});

describe('OPTIONAL MATCH', () => {
  it('should equal to MATCH', () => {
    expect(optionalMatch().node(node().name('n').label('Label')).getDSL()).toBe(
      `OPTIONAL ${match().node(node().name('n').label('Label')).getDSL()}`
    );
  });
});

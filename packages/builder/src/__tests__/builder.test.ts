import { query } from '../builder';
import { match, optionalMatch } from '../match';
import { node } from '../node';
import { nodeRelation } from '../node-relation';
import { orderBy } from '../order-by';
import { returns } from '../return';

describe('QueryBuilder', () => {
  describe('orderBy', () => {
    it('node and property', () => {
      expect(
        query()
          .match(match().nodes([node().name('n').label('Label')]))
          .return(returns().nodes({ name: 'n' }))
          .orderBy(orderBy().nodes({ name: 'n', property: 'p' }))
          .build()
      ).toBe(`MATCH (n:Label) RETURN n ORDER BY n.p`);
    });

    it('desc', () => {
      expect(
        query()
          .match(match().nodes([node().name('n').label('Label')]))
          .return(returns().nodes({ name: 'n' }))
          .orderBy(orderBy().nodes({ name: 'n', property: 'p' }).desc())
          .build()
      ).toBe(`MATCH (n:Label) RETURN n ORDER BY n.p DESC`);
    });
  });

  describe('skip', () => {
    it('support number', () => {
      const skip = 5;
      expect(
        query()
          .match(match().nodes([node().name('n').label('Label')]))
          .return(returns().nodes({ name: 'n' }))
          .skip(skip)
          .build()
      ).toBe(`MATCH (n:Label) RETURN n SKIP ${skip}`);
    });

    it('support expression', () => {
      const skip = 'toInteger(3 * rand())+ 1';
      expect(
        query()
          .match(match().nodes([node().name('n').label('Label')]))
          .return(returns().nodes({ name: 'n' }))
          .skip(skip)
          .build()
      ).toBe(`MATCH (n:Label) RETURN n SKIP ${skip}`);
    });
  });

  describe('limit', () => {
    it('support number', () => {
      const limit = 5;
      expect(
        query()
          .match(match().nodes([node().name('n').label('Label')]))
          .return(returns().nodes({ name: 'n' }))
          .limit(limit)
          .build()
      ).toBe(`MATCH (n:Label) RETURN n LIMIT ${limit}`);
    });

    it('support expression', () => {
      const limit = 'toInteger(3 * rand())+ 1';
      expect(
        query()
          .match(match().nodes([node().name('n').label('Label')]))
          .return(returns().nodes({ name: 'n' }))
          .limit(limit)
          .build()
      ).toBe(`MATCH (n:Label) RETURN n LIMIT ${limit}`);
    });
  });

  it('match, optional match, skip, limit and order by', () => {
    const skip = 1;
    const limit = 5;
    expect(
      query()
        .match(match().nodes([node().name('a').label('A')]))
        .optionalMatch(optionalMatch().nodes([node().name('b').label('B')]))
        .return(returns().nodes({ name: 'n' }))
        .orderBy(orderBy().nodes({ name: 'n', property: 'p' }))
        .skip(skip)
        .limit(limit)
        .build()
    ).toBe(
      `MATCH (a:A) OPTIONAL MATCH (b:B) RETURN n ORDER BY n.p SKIP ${skip} LIMIT ${limit}`
    );
  });

  it('relation', () => {
    expect(
      query()
        .match(
          match()
            .node(node().name('a'))
            .related(nodeRelation().in().variable('r').type('ACTED_IN'))
            .node(node().name('b'))
        )
        .return(returns().nodes({ name: 'r' }))
        .build()
    ).toBe(`MATCH (a)-[r:ACTED_IN]->(b) RETURN r`);
  });
});

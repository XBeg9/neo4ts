import { col, column, list, proj, projection } from '../column';
import { match } from '../match';
import { node } from '../node';
import { nodeRelation } from '../node-relation';

describe('column', () => {
  it('just name', () => {
    expect(col().name('a').getDSL()).toEqual('a');
  });

  it('just prop', () => {
    expect(col().property('a').getDSL()).toEqual('');
  });

  it('name and property', () => {
    expect(column().name('a').property('prop').getDSL()).toEqual('a.prop');
  });

  it('alias', () => {
    expect(col().name('a').property('prop').alias('alias').getDSL()).toEqual(
      'a.prop AS alias'
    );
  });

  describe('projection', () => {
    it('simple', () => {
      expect(projection().name('a').properties('prop').getDSL()).toEqual(
        'a { .prop }'
      );
    });

    it('multiple properties', () => {
      expect(
        proj().name('a').properties(['prop1', 'prop2']).alias('b').getDSL()
      ).toEqual('a { .prop1, .prop2 } AS b');
    });

    it('alias', () => {
      expect(proj().name('a').properties('prop').alias('b').getDSL()).toEqual(
        'a { .prop } AS b'
      );
    });

    describe('nested', () => {
      it('simple', () => {
        expect(
          proj()
            .name('a')
            .properties(['prop', proj().name('b').properties('prop')])
            .getDSL()
        ).toEqual('a { .prop, b: { .prop } }');
      });

      it('deep', () => {
        expect(
          proj()
            .name('a')
            .properties([
              'prop',
              proj()
                .name('b')
                .properties(['prop', proj().name('c').properties('prop')])
            ])
            .getDSL()
        ).toEqual('a { .prop, b: { .prop, c: { .prop } } }');
      });
    });
  });

  describe('list', () => {
    it('with column', () => {
      expect(
        list()
          .select(
            match()
              .node(node().name('a'))
              .related(nodeRelation().type('ACTED_IN').in())
              .node(node().name('b'))
          )
          .pipe([col().name('a').property('prop')])
          .getDSL()
      ).toEqual('[(a)-[:ACTED_IN]->(b) | a.prop]');
    });

    it('with projection', () => {
      expect(
        list()
          .select(
            match()
              .node(node().name('a'))
              .related(nodeRelation().type('ACTED_IN').in())
              .node(node().name('b'))
          )
          .pipe(projection().name('a').properties('prop'))
          .getDSL()
      ).toEqual('[(a)-[:ACTED_IN]->(b) | a { .prop }]');
    });

    it('with alias', () => {
      expect(
        list()
          .select(
            match()
              .node(node().name('a'))
              .related(nodeRelation().type('ACTED_IN').in())
              .node(node().name('b'))
          )
          .pipe([col().name('a').property('prop')])
          .alias('col')
          .getDSL()
      ).toEqual('[(a)-[:ACTED_IN]->(b) | a.prop] AS col');
    });
  });
});

import { col, column, proj, projection } from '../column';

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
  });
});

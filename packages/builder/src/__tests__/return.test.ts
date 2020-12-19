import { returns } from '../return';

describe('Return', () => {
  it('all', () => {
    expect(returns().all().getDSL()).toBe(`RETURN *`);
  });

  it('all must override all other params', () => {
    expect(
      returns()
        .nodes([{ name: 'n' }])
        .all()
        .getDSL()
    ).toBe(`RETURN *`);
  });

  it('node without property', () => {
    expect(
      returns()
        .nodes([{ name: 'n' }])
        .getDSL()
    ).toBe(`RETURN n`);
  });

  it('node with property', () => {
    expect(
      returns()
        .nodes([{ name: 'n', property: 'prop' }])
        .getDSL()
    ).toBe(`RETURN n.prop`);
  });

  it('array of nodes', () => {
    expect(
      returns()
        .nodes([{ name: 'a' }, { name: 'b' }])
        .getDSL()
    ).toBe(`RETURN a, b`);
  });

  it('multi nodes statements', () => {
    expect(returns().nodes({ name: 'a' }).nodes({ name: 'b' }).getDSL()).toBe(
      `RETURN a, b`
    );
  });

  it('array of nodes with props', () => {
    expect(
      returns()
        .nodes([
          { name: 'a', property: 'propA' },
          { name: 'b', property: 'propB' }
        ])
        .getDSL()
    ).toBe(`RETURN a.propA, b.propB`);
  });
});

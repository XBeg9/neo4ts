import { col } from '../column';
import { returns } from '../return';

describe('Return', () => {
  it('all', () => {
    expect(returns().all().getDSL()).toBe(`RETURN *`);
  });

  it('all must override all other params', () => {
    expect(returns().columns(col().name('n')).all().getDSL()).toBe(`RETURN *`);
  });

  it('column without property', () => {
    expect(returns().columns(col().name('n')).getDSL()).toBe(`RETURN n`);
  });

  it('column with property', () => {
    expect(returns().columns(col().name('n').property('prop')).getDSL()).toBe(
      `RETURN n.prop`
    );
  });

  it('array of columns', () => {
    expect(
      returns()
        .columns([col().name('a'), col().name('b')])
        .getDSL()
    ).toBe(`RETURN a, b`);
  });

  it('multi columns statements', () => {
    expect(
      returns().columns(col().name('a')).columns(col().name('b')).getDSL()
    ).toBe(`RETURN a, b`);
  });

  it('array of columns with props', () => {
    expect(
      returns()
        .columns([
          col().name('a').property('propA'),
          col().name('b').property('propB')
        ])
        .getDSL()
    ).toBe(`RETURN a.propA, b.propB`);
  });
});

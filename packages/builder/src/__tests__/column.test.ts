import { col, column } from '../column';

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
});

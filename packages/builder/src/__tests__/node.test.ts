import { node } from '../node';

describe('Node', () => {
  it('empty', () => {
    expect(node().getDSL()).toBe(`()`);
  });

  it('with name', () => {
    expect(node().name('n').getDSL()).toBe(`(n)`);
  });

  it('with label', () => {
    expect(node().label('Label').getDSL()).toBe(`(:Label)`);
  });

  it('with name and label', () => {
    expect(node().name('n').label('Label').getDSL()).toBe(`(n:Label)`);
  });

  describe('where', () => {
    it('single statement', () => {
      expect(node().name('n').where({ key: 'value' }).getDSL()).toBe(
        `(n { key: 'value' })`
      );
    });

    it('where array', () => {
      expect(
        node()
          .name('n')
          .where([{ key1: 'value1' }, { key2: 'value2' }])
          .getDSL()
      ).toBe(`(n { key1: 'value1', key2: 'value2' })`);
    });

    it('multi where statements', () => {
      expect(
        node()
          .name('n')
          .where({ key1: 'value1' })
          .where({ key2: 'value2' })
          .getDSL()
      ).toBe(`(n { key1: 'value1', key2: 'value2' })`);
    });
  });
});

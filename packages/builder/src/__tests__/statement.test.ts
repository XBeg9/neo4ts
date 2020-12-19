import { nodeStatement, NodeStatementError, statement } from '../where';

describe('NodeStatement', () => {
  it('with property', () => {
    expect(nodeStatement().name('n').property('name').getDSL()).toBe(`n.name`);
  });

  it('with label', () => {
    expect(nodeStatement().name('n').label('Label').getDSL()).toBe(`n:Label`);
  });

  it('with label and property', () => {
    expect(() =>
      nodeStatement().name('n').label('Label').property('name').getDSL()
    ).toThrow(NodeStatementError);
  });
});

describe('Statement', () => {
  it('with single node statement', () => {
    expect(
      statement().node(nodeStatement().name('m').label('Movie')).getDSL()
    ).toBe(`m:Movie`);
  });

  it('string and number', () => {
    expect(statement().eq('a', 1).getDSL()).toBe(`'a' = 1`);
  });

  describe('op', () => {
    it('=', () => {
      expect(statement().eq(1, 1).getDSL()).toBe(`1 = 1`);
    });

    it('!=', () => {
      expect(statement().notEq(1, 1).getDSL()).toBe(`1 != 1`);
    });

    it('>', () => {
      expect(statement().gt(1, 1).getDSL()).toBe(`1 > 1`);
    });

    it('>=', () => {
      expect(statement().gte(1, 1).getDSL()).toBe(`1 >= 1`);
    });

    it('<', () => {
      expect(statement().lt(1, 1).getDSL()).toBe(`1 < 1`);
    });

    it('<=', () => {
      expect(statement().lte(1, 1).getDSL()).toBe(`1 <= 1`);
    });

    it('<=', () => {
      expect(statement().regexp(1, /[0-9]/).getDSL()).toBe(`1 =~ '/[0-9]/'`);
    });

    it('STARTS WITH', () => {
      expect(statement().startsWith(1, '1').getDSL()).toBe(`1 STARTS WITH '1'`);
    });

    it('ENDS WITH', () => {
      expect(statement().endsWith(1, '1').getDSL()).toBe(`1 ENDS WITH '1'`);
    });

    it('CONTAINS', () => {
      expect(statement().contains(1, '1').getDSL()).toBe(`1 CONTAINS '1'`);
    });

    it('negative', () => {
      expect(
        statement()
          .not()
          .contains(nodeStatement().name('n').property('name'), '1')
          .getDSL()
      ).toBe(`NOT n.name CONTAINS '1'`);
    });

    it('EXISTS', () => {
      expect(
        statement().exists(nodeStatement().name('n').property('name')).getDSL()
      ).toBe(`EXISTS(n.name)`);
    });

    it('IS NULL', () => {
      expect(
        statement().null(nodeStatement().name('n').property('name')).getDSL()
      ).toBe(`n.name IS NULL`);
    });

    it('IS NOT NULL', () => {
      expect(
        statement()
          .not()
          .null(nodeStatement().name('n').property('name'))
          .getDSL()
      ).toBe(`n.name IS NOT NULL`);
    });
  });

  it('with left node statement and right string', () => {});
});

import { statement, where } from '../where';

describe('WHERE', () => {
  describe('single group', () => {
    it('AND', () => {
      expect(
        where()
          .and([statement().gte(1, 1), statement().eq(1, 1)])
          .getDSL()
      ).toBe(`WHERE 1 >= 1 AND 1 = 1`);
    });

    it('OR', () => {
      expect(
        where()
          .or([statement().gte(1, 1), statement().eq(1, 1)])
          .getDSL()
      ).toBe(`WHERE 1 >= 1 OR 1 = 1`);
    });

    it('XOR', () => {
      expect(
        where()
          .xor([statement().gte(1, 1), statement().eq(1, 1)])
          .getDSL()
      ).toBe(`WHERE 1 >= 1 XOR 1 = 1`);
    });
  });

  describe('connection', () => {
    it('using OR', () => {
      expect(
        where()
          .and([statement().gte(1, 1), statement().eq(2, 2)])
          .or()
          .and([statement().gte(1, 1), statement().eq(2, 2)])
          .getDSL()
      ).toBe(`WHERE (1 >= 1 AND 2 = 2) OR (1 >= 1 AND 2 = 2)`);
    });

    it('using AND', () => {
      expect(
        where()
          .or([statement().gte(1, 1), statement().eq(2, 2)])
          .and()
          .or([statement().gte(1, 1), statement().eq(2, 2)])
          .getDSL()
      ).toBe(`WHERE (1 >= 1 OR 2 = 2) AND (1 >= 1 OR 2 = 2)`);
    });

    it('using XOR', () => {
      expect(
        where()
          .and([statement().gte(1, 1), statement().eq(2, 2)])
          .xor()
          .and([statement().gte(1, 1), statement().eq(2, 2)])
          .getDSL()
      ).toBe(`WHERE (1 >= 1 AND 2 = 2) XOR (1 >= 1 AND 2 = 2)`);
    });
  });
});

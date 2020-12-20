import { MaxHopsError } from '../errors';
import { nodeRelation } from '../node-relation';

describe('NodeRelation', () => {
  describe('types', () => {
    it('IN', () => {
      expect(
        nodeRelation()
          .in()
          .getDSL()
      ).toBe(`-->`);
    });

    it('OUT', () => {
      expect(
        nodeRelation()
          .out()
          .getDSL()
      ).toBe(`<--`);
    });

    it('UNI', () => {
      expect(
        nodeRelation()
          .uni()
          .getDSL()
      ).toBe(`--`);
    });

    it('UNI to be default', () => {
      expect(nodeRelation().getDSL()).toBe(`--`);
    });
  });

  describe('variable position', () => {
    it('IN', () => {
      expect(
        nodeRelation()
          .in()
          .variable('r')
          .getDSL()
      ).toBe(`-[r]->`);
    });

    it('OUT', () => {
      expect(
        nodeRelation()
          .out()
          .variable('r')
          .getDSL()
      ).toBe(`<-[r]-`);
    });

    it('UNI', () => {
      expect(
        nodeRelation()
          .uni()
          .variable('r')
          .getDSL()
      ).toBe(`-[r]-`);
    });
  });

  describe('type', () => {
    it('without variable', () => {
      expect(
        nodeRelation()
          .type('ACTED_IN')
          .getDSL()
      ).toBe(`-[:ACTED_IN]-`);
    });

    it('with variable', () => {
      expect(
        nodeRelation()
          .variable('r')
          .type('ACTED_IN')
          .getDSL()
      ).toBe(`-[r:ACTED_IN]-`);
    });

    it('multi types with variable', () => {
      expect(
        nodeRelation()
          .variable('r')
          .types(['ACTED_IN', 'WATCHED'])
          .getDSL()
      ).toBe(`-[r:ACTED_IN|WATCHED]-`);
    });

    it('uncommon characters', () => {
      expect(
        nodeRelation()
          .variable('r')
          .type('ACTED IN')
          .getDSL()
      ).toBe('-[r:`ACTED IN`]-');
      expect(
        nodeRelation()
          .variable('r')
          .type('ACTED+IN')
          .getDSL()
      ).toBe('-[r:`ACTED+IN`]-');
    });
  });

  describe('hops', () => {
    it('maxHops', () => {
      expect(
        nodeRelation()
          .type('ACTED_IN')
          .maxHops(2)
          .getDSL()
      ).toBe(`-[:ACTED_IN*2]-`);
    });

    it('minHops can`t be used without minHops', () => {
      expect(() =>
        nodeRelation()
          .type('ACTED_IN')
          .minHops(2)
          .getDSL()
      ).toThrow(MaxHopsError);
    });

    it('zero length paths', () => {
      expect(
        nodeRelation()
          .type('ACTED_IN')
          .minHops(0)
          .maxHops(1)
          .getDSL()
      ).toBe(`-[:ACTED_IN*0..1]-`);
    });

    it('minHops with maxHops', () => {
      expect(
        nodeRelation()
          .type('ACTED_IN')
          .minHops(1)
          .maxHops(3)
          .getDSL()
      ).toBe(`-[:ACTED_IN*1..3]-`);
    });

    it('without type and vars', () => {
      expect(
        nodeRelation()
          .minHops(0)
          .maxHops(1)
          .getDSL()
      ).toBe(`-[*0..1]-`);
    });
  });
});

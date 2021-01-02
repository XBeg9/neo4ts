import { col } from '../column';

describe('column', () => {
  it('intersperse', () => {
    expect(col().name('a')).toStrictEqual([1, 5, 2, 5, 3]);
  });
});

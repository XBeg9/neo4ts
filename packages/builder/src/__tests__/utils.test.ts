import { intersperse } from '../utils';

describe('Utils', () => {
  it('intersperse', () => {
    expect(intersperse([1, 2, 3], () => 5)).toStrictEqual([1, 5, 2, 5, 3]);
  });
});

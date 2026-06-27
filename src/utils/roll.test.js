import { pick } from './roll';

describe('pick', () => {
  it('returns an element from the array', () => {
    const arr = ['a', 'b', 'c'];
    expect(arr).toContain(pick(arr));
  });

  it('returns the only element of a single-item array', () => {
    expect(pick(['only'])).toBe('only');
  });

  it('varies results over many calls', () => {
    const arr = ['x', 'y', 'z'];
    const results = new Set(Array.from({ length: 50 }, () => pick(arr)));
    expect(results.size).toBeGreaterThan(1);
  });
});

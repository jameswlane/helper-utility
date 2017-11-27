import items from '../../data/items';
import { filterList } from '../../src';

describe('Check All Items', () => {
  test('should check all items', () => {
    const filteredList = filterList(items, 'Rose');

    expect(filteredList).toHaveLength(46);
  });
});

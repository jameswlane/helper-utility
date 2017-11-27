import itemsGroup from '../../data/items-group';
import { checkAllItems } from '../../src';

describe('Check All Items', () => {
  test('should check all items', () => {
    const allCheckedItems = checkAllItems(itemsGroup, true);
    allCheckedItems.map(function (group) {
      expect(group.selected).toBe(true);
      group.items.map(function (item) {
        expect(item.selected).toBe(true);
      });
    });  });
});

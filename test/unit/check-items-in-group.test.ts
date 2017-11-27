import itemsGroup from '../../data/items-group';
import { checkItemsInGroup } from '../../src';

describe('Check Items in a group', () => {
  test('should check all items', () => {
    const allCheckedItems = checkItemsInGroup(itemsGroup, 12345);

    allCheckedItems.map((group) => {
      expect(group.selected).toBe(true);
      group.items.map((item) => {
        if (
          item.id === 543210 ||
          item.id === 5432111 ||
          item.id === 5432122 ||
          item.id === 5432133 ||
          item.id === 5432144 ||
          item.id === 5432155 ||
          item.id === 5432166
        ) {
          expect(item.selected).toBe(true);
        } else {
          expect(item.selected).toBe(false);
        }
      });
    });
  });
});

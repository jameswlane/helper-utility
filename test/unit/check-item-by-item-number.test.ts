import itemsGroup from '../../data/items-group';
import { checkItemByItemNumber } from '../../src';

describe('Check All Items', () => {
  test('should check all items', () => {
    const allCheckedItems = checkItemByItemNumber(itemsGroup, 543211);

    allCheckedItems.map((group) => {
      group.items.map((item) => {
        if (item.id === 543211) {
          expect(item.selected).toBe(true);
        } else {
          expect(item.selected).toBe(false);
        }
      });
    });
  });
});

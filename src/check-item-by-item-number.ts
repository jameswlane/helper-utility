export function checkItemByItemNumber(itemsGroup: any, itemId: any) {
  return itemsGroup.map((group) => {
    const newItems = group.items.map((item: any) => {
      if (item.id === itemId) {
        return Object.assign({}, item, { selected: !item.selected });
      }
      return item;
    });
    const numberOfSelectedItems = newItems.filter(item => item.selected === true).length;
    const numberOfItems = newItems.length;
    return Object.assign({}, group, {
      items: newItems,
      selected: (numberOfItems > 0 || numberOfItems === numberOfSelectedItems),
    });
  });
}

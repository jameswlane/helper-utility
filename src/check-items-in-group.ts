export function checkItemsInGroup(itemsGroup: any, groupId: any) {
  const ourGroup = itemsGroup.find(group => group.id === groupId);
  const itemIds = ourGroup.items.map(item => item.id);
  return itemsGroup.map((group: any) => {
    const newItems = group.items.map((item) => {
      if (itemIds.includes(item.id)) {
        return Object.assign({}, item, { selected: !item.selected });
      }
      return item;
    });
    const numberOfSelectedItems = newItems.filter(item => item.selected === true).length;
    const numberOfItems = newItems.length;

    return Object.assign(
      {},
      group,
      {
        items: newItems,
        selected: (numberOfItems > 0 || numberOfItems === numberOfSelectedItems),
      },
    );
  });
}

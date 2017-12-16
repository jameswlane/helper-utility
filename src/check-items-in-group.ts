export function checkItemsInGroup(itemsGroup: any, groupId: any) {
  const ourGroup = itemsGroup.find((group: any) => group.id === groupId);
  const itemIds = ourGroup.items.map((item: any) => item.id);
  return itemsGroup.map((group: any) => {
    const newItems = group.items.map((item: any) => {
      if (itemIds.includes(item.id)) {
        return Object.assign({}, item, { selected: !item.selected });
      }
      return item;
    });
    const numberOfSelectedItems = newItems.filter((item: any) => item.selected === true).length;
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

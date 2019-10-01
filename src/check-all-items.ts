export function checkAllItems(itemsGroup: object[], selected: boolean) {
  return itemsGroup.map((group: any) => {
    const newItems = getNewItems(group, selected);
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

function getNewItems(group: any, selected: boolean) {
    return group.items.map((item: any) => Object.assign({}, item, { selected }));
}


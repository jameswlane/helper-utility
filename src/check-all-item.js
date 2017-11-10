export default function (itemsGroup, selected) {
  return itemsGroup.map((group) => {
    const newItems = group.items.map(item => Object.assign({}, item, { selected }));
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

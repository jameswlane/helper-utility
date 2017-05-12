export default function (itemsGroup, selected) {
  return itemsGroup.map(function(group) {
    const newItems = group.items.map(function (item) {
      return Object.assign({}, item, { selected: selected});
    });
    const numberOfSelectedItems = newItems.filter(item => item.selected === true).length;
    const numberOfItems = newItems.length;
    return Object.assign({}, group, { items: newItems, selected: (numberOfItems > 0 ||numberOfItems === numberOfSelectedItems)});
  });
}

export function sortListAlphabetically(itemsGroup: any, sortAlphabetically: any) {
  return itemsGroup.sort((a, b) => {
    const itemA = a.name.toLowerCase();
    const itemB = b.name.toLowerCase();
    if (itemA < itemB) {
      return sortAlphabetically ? -1 : 1;
    }

    if (itemA > itemB) {
      return sortAlphabetically ? 1 : -1;
    }

    return 0;
  });
}

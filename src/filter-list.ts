export function filterList(itemsList: any, filterText: any) {
  return itemsList.filter((item: any) => {
    return Object.keys(item).some((key) => {
      const value = item[key].toString();

      return value.toLowerCase().includes(filterText.toLowerCase());
    });
  });
}

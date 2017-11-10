export default function (itemsList, filterText) {
  return itemsList.filter((item) => {
    Object.values(item).forEach((value) => {
      if (typeof value === 'string' || value instanceof String) {
        return value.toLowerCase().includes(filterText.toLowerCase());
      }
      return false;
    });

    return false;
  });
}

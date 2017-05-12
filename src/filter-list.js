export default function(itemsList, filterText) {
  return itemsList.filter((item) => {
    for (const value of Object.values(item)) {
      if (typeof value === 'string' || value instanceof String) {
        return value.toLowerCase().includes(filterText.toLowerCase());
      }
    }
    return false;
  });
}

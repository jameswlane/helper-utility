export function clone(items: any) {
  if (Array.isArray(items)) {
    return [...items];
  }

  const cloned: any = {};

  Object.keys(items).forEach((prop) => {
    cloned[prop] = items[prop];
  });

  return cloned;
}

import { clone } from '../../src';

describe('Clone', () => {
  test('should clone items in a array', () => {
    const existingArray = [1, 2, 3, 4, 5];

    const newArray = clone(existingArray);

    expect(existingArray).toEqual(newArray);
  });

  test('should clone items in a object', () => {
    const existingObject = { a: 1, b: 2, c: 3, d: 4, e: 5 };

    const newObject = clone(existingObject);

    expect(existingObject).toEqual(newObject);
  });
});

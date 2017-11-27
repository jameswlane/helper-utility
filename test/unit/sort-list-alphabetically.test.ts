import itemsGroup from '../../data/items-group';
import { sortListAlphabetically } from '../../src';

describe('sortListAlphabetically', () => {
  test('sortListAlphabetically true', () => {
    const alphabeticList = sortListAlphabetically(itemsGroup, true);
    expect(alphabeticList).toMatchSnapshot();
  });
  test('sortListAlphabetically false', () => {
    const alphabeticList = sortListAlphabetically(itemsGroup, false);
    expect(alphabeticList).toMatchSnapshot();
  });
});

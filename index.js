import chalk from 'chalk';

import itemsList from './data/items';
import itemsGroup from './data/items-group';

import checkAllItems from './src/check-all-item';
import checkItemByItemNumber from './src/check-item-by-item-number';
import checkItemsInGroup from './src/check-items-in-group';
import filterList from './src/filter-list';
import sortListAlphabetically from './src/sort-list-alphabetically';

function whatColor(value) {
  return value ? chalk.green(value) : chalk.red(value);
}

/*
Filter List
 */
const filteredList = filterList(itemsList, 'Rose');
console.log('filterList');
console.log(filteredList);

/*
 Alphabetical List
 */
const alphabeticList = sortListAlphabetically(itemsGroup, true);
console.log('sortListAlphabetically');
alphabeticList.map((item) => console.log(item.name));

const reversedAlphabeticList = sortListAlphabetically(itemsGroup, false);
console.log('sortListAlphabetically Reversed');
reversedAlphabeticList.map((item) => console.log(item.name));

/*
 Check All Items
 */
const allCheckedItems = checkAllItems(itemsGroup, true);
allCheckedItems.map(function(group) {
  console.log(chalk.blue('Group selected value: '), whatColor(group.selected));
  group.items.map(function (item) {
    console.log(chalk.blue('Item selected value: '), whatColor(item.selected));
  });
});

/*
 Check Item By Item ID
 */
const allCheckedItems = checkItemByItemNumber(itemsGroup, 543211);
allCheckedItems.map(function(group) {
  console.log(chalk.blue('Group selected value: '), whatColor(group.selected));
  group.items.map(function (item) {
    console.log(chalk.blue('Item selected value: '), whatColor(item.selected));
  });
});

/*
 Check Items By Group ID
 */
const allCheckedItems = checkItemsInGroup(itemsGroup, 12345);
allCheckedItems.map(function(group) {
  console.log(chalk.blue('Group selected value: '), whatColor(group.selected));
  group.items.map(function (item) {
    console.log(chalk.blue('Item selected value: '), whatColor(item.selected));
  });
});


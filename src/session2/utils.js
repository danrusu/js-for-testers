const isValidNumber = value =>
  typeof value === 'number' && isNaN(value) == false;

const numbersAscendingComparator = (a, b) => a - b;

const filterAndSortNumbers = mixedArray => {
  const numbers = mixedArray.filter(isValidNumber);
  const sortedNumbers = numbers.sort(numbersAscendingComparator);
  return sortedNumbers;
};

const isString = value => typeof value === 'string';
const getConcatenatedStrings = mixedArray => {
  return mixedArray.filter(isString).join(' ');
};

module.exports = {
  filterAndSortNumbers,
  isValidNumber,
  getConcatenatedStrings,
  PI: 3.14,
};

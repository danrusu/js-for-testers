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

const sum = (a, b) => a + b;
const isOdd = number => number % 2 === 1;
const getOddNumbersAverage = mixedArray => {
  const oddNumners = mixedArray.filter(isValidNumber).filter(isOdd);
  const oddNumbersSum = oddNumners.reduce(sum, 0);
  return oddNumbersSum / oddNumners.length;
};

const isCar = obj => obj?.type === 'car';
const getCarPrice = car => car.price;
const getCarsTotalPrice = mixedArray =>
  mixedArray.filter(isCar).map(getCarPrice).reduce(sum, 0);

const changeCarNameToLowerCase = car => ({
  ...car,
  name: car.name.toLowerCase(),
});
const getCarsWithLowerCaseNames = mixedArray =>
  mixedArray.filter(isCar).map(changeCarNameToLowerCase);

const getCarName = car => car.name;
const getCarNames = mixedArray => mixedArray.filter(isCar).map(getCarName);

module.exports = {
  filterAndSortNumbers,
  getConcatenatedStrings,
  getOddNumbersAverage,
  getCarsTotalPrice,
  getCarsWithLowerCaseNames,
  getCarNames,
};

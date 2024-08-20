const {
  filterAndSortNumbers,
  isValidNumber,
  getConcatenatedStrings,
  PI,
} = require('./utils');

const mixed = [
  5,
  3,
  NaN,
  'hello',
  1,
  { type: 'car', name: 'Ford', price: 13000 },
  4,
  'world',
  undefined,
  2,
  10,
  true,
  { type: 'car', name: 'BMW', price: 80000 },
  {},
  null,
];

// 1.1 Get an array of all valid numbers from mixed array. Sort the array ascending.
const sortedNumbers = filterAndSortNumbers(mixed);
console.log('sortedNumbers:', sortedNumbers);

// 1.2 Get a string composed from all strings within mixed array, concatenated by space.
const concatenatedStrings = getConcatenatedStrings(mixed);
console.log('concatenatedStrings:', concatenatedStrings);

// 1.3 Get the average value of all odd numbers from mixed array.
const sum = (a, b) => a + b;
const isOdd = number => number % 2 === 1;
const getOddNumbersAverage = mixedArray => {
  const oddNumners = mixedArray.filter(isValidNumber).filter(isOdd);
  const oddNumbersSum = oddNumners.reduce(sum, 0);
  return oddNumbersSum / oddNumners.length;
};
const oddNumbersAverage = getOddNumbersAverage(mixed);
console.log('oddNumbersAverage:', oddNumbersAverage);

// 1.4 Get the total price of cars from mixed array.
const isCar = obj => obj?.type === 'car';
const getCarPrice = car => car.price;
const getCarsTotalPrice = mixedArray =>
  mixedArray.filter(isCar).map(getCarPrice).reduce(sum, 0);
const carsTotalPrice = getCarsTotalPrice(mixed);
console.log('carsTotalPrice:', carsTotalPrice);

// 1.5 Get the cars array with names having only lowercase letters.
const changeCarNameToLowerCase = car => ({
  ...car,
  name: car.name.toLowerCase(),
});
const getCarsWithLowerCaseNames = mixedArray =>
  mixedArray.filter(isCar).map(changeCarNameToLowerCase);
const carsWithLowerCaseNames = getCarsWithLowerCaseNames(mixed);
console.log('carsWithLowerCaseNames:', carsWithLowerCaseNames);

// 1.6 Get an array of all car names from mixed array.
const getCarName = car => car.name;
const getCarNames = mixedArray => mixedArray.filter(isCar).map(getCarName);
const carNames = getCarNames(mixed);
console.log('carNames:', carNames);

console.log(PI);

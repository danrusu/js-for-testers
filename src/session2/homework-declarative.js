const {
  filterAndSortNumbers,
  getConcatenatedStrings,
  getOddNumbersAverage,
  getCarsTotalPrice,
  getCarsWithLowerCaseNames,
  getCarNames,
} = require('./utils');
const { mixed } = require('./mixed-data');

// 1.1 Get an array of all valid numbers from mixed array. Sort the array ascending.
const sortedNumbers = filterAndSortNumbers(mixed);
console.log('sortedNumbers:', sortedNumbers);

// 1.2 Get a string composed from all strings within mixed array, concatenated by space.
const concatenatedStrings = getConcatenatedStrings(mixed);
console.log('concatenatedStrings:', concatenatedStrings);

// 1.3 Get the average value of all odd numbers from mixed array.
const oddNumbersAverage = getOddNumbersAverage(mixed);
console.log('oddNumbersAverage:', oddNumbersAverage);

// 1.4 Get the total price of cars from mixed array.
const carsTotalPrice = getCarsTotalPrice(mixed);
console.log('carsTotalPrice:', carsTotalPrice);

// 1.5 Get the cars array with names having only lowercase letters.
const carsWithLowerCaseNames = getCarsWithLowerCaseNames(mixed);
console.log('carsWithLowerCaseNames:', carsWithLowerCaseNames);

// 1.6 Get an array of all car names from mixed array.
const carNames = getCarNames(mixed);
console.log('carNames:', carNames);

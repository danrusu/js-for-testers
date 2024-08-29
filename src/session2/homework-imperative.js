const { mixed } = require('./mixed-data');

// 1.1 Get an array of all valid numbers from mixed array. Sort the array ascending.
function filterAndSortNumbers(mixedArray) {
  const numbers = [];
  for (const item of mixedArray) {
    if (isValidNumber(item)) {
      numbers.push(item);
    }
  }
  return numbers.sort((a, b) => a - b);
}

function isValidNumber(value) {
  return typeof value === 'number' && isNaN(value) == false;
}

console.log('sortedNumbers:', filterAndSortNumbers(mixed));

// 1.2 Get a string composed from all strings within mixed array, concatenated by space.
function getConcatenatedStrings(mixedArray) {
  let concatenated = '';
  for (const item of mixedArray) {
    if (typeof item === 'string') {
      concatenated += `${item} `;
    }
  }
  return concatenated.slice(0, concatenated.length - 1); // remove extra space added at the end
}

console.log('concatenatedStrings:', getConcatenatedStrings(mixed));

// 1.3 Get the average value of all odd numbers from mixed array.
function getOddNumbersAverage(mixedArray) {
  const numbers = filterAndSortNumbers(mixedArray);
  const oddNumbers = filterOddNumbers(numbers);
  const oddNumbersSum = sum(oddNumbers);
  return oddNumbersSum / oddNumbers.length;
}

function filterOddNumbers(numbers) {
  const oddNumbers = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      oddNumbers.push(number);
    }
  }
  return oddNumbers;
}

function sum(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

console.log('oddNumbersAverage:', getOddNumbersAverage(mixed));

// 1.4 Get the total price of cars from mixed array.
function getCarsTotalPrice(mixedArray) {
  const cars = getCars(mixedArray);
  const prices = [];
  for (const car of cars) {
    prices.push(car.price);
  }
  return sum(prices);
}

function getCars(mixedArray) {
  const cars = [];
  for (const item of mixedArray) {
    if (item?.type === 'car') {
      cars.push(item);
    }
  }
  return cars;
}

console.log('carsTotalPrice:', getCarsTotalPrice(mixed));

// 1.5 Get the cars array and change their names to have only lowercase letters.
function getCarsWithLowerCaseNames(mixedArray) {
  const cars = getCars(mixedArray);
  const carsWithLowerCaseNames = [];
  for (const car of cars) {
    carsWithLowerCaseNames.push({ ...car, name: car.name.toLowerCase() });
  }
  return carsWithLowerCaseNames;
}

console.log('carsWithLowerCaseNames:', getCarsWithLowerCaseNames(mixed));

// 1.6 Get an array of all car names from mixed array.
function getCarNames(mixedArray) {
  const cars = getCars(mixedArray);
  const names = [];
  for (const car of cars) {
    names.push(car.name);
  }
  return names;
}

console.log('carNames:', getCarNames(mixed));

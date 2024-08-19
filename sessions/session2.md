# Functions & Data Processing

```text
“Sometimes, the elegant implementation is just a function. Not a method. Not a class. Not a framework. Just a function.”    
- John Carmack
```

![](../resource/image/js_try_catch.jpg)

## Content

- [Functions \& Data Processing](#functions--data-processing)
  - [Content](#content)
    - [1. Functions](#1-functions)
    - [2. Exceptions](#2-exceptions)
    - [3. Arrays](#3-arrays)
      - [3.1. Imperative loops](#31-imperative-loops)
      - [3.2. Declarative loops](#32-declarative-loops)
    - [4. Homework](#4-homework)
      - [4.1 Task](#41-task)
      - [4.2 Solution](#42-solution)
        - [4.2.1 Imperative (for...of loop)](#421-imperative-forof-loop)
        - [4.2.2 Declarative (map/filter/reduce)](#422-declarative-mapfilterreduce)

### 1. [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

A **function** is usually created by _wrapping a piece of program and giving it a name_. This has important usages:

- structure large programs
- associate names with subprograms (define new vocabulary)
- isolate subprograms
- reduce repetition (**DRY** - **D**on't **R**epeat **Yourself** vs. **WET**)

```javascript
// declaration notation; hoisted
function square1(x) {
  return x * x;
}

// function as value
const square2 = function (x) {
  return x * x;
};

// arrow function
const square3 = x => x * x;

// function that does not return a value (it's result is a side effect)
function logStart() {
  console.log('--- START ---');
}

// usage demo
console.log(logStart());

console.log('square1');
console.log(typeof square1);
console.log(square1(5));

console.log('square2');
console.log(typeof square2);
console.log(square2(5));

console.log('square3');
console.log(typeof square3);
console.log(square3(5));
```

Side effects example

```javascript
const cars = [
  {
    name: 'Ford',
    price: 13_600,
  },
  {
    name: 'BMW',
    price: 78_000,
  },
  {
    name: 'Mercedes',
    price: 44_000,
  },
];

const filterCars = (cars, maxPrice) => {
  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    if (car.price > maxPrice) {
      cars.splice(i, 1); // side effect (mutation)
      i--;
    }
  }
  console.log(`Cars cheaper than ${maxPrice}`);
  console.log(JSON.stringify(cars, null, 2));
};

filterCars(cars, 15_000);

filterCars(cars, 80_000);
```

### 2. [Exceptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

An **_exception_** is a condition that interrupts normal code execution.

```javascript
const calculateTax = grossValue => {
  let tax = 0;
  try {
    assertNumber(grossValue);
    tax = grossValue / 10;
  } catch (e) {
    console.log(e);
  } finally {
    console.log(`calculated tax for "${grossValue}"`);
    console.log(`tax is ${tax}`);
  }
};

function assertNumber(x) {
  if (typeof x !== 'number') {
    throw new Error(`not a number: "${x}"`);
  }
}

calculateTax(10000);
calculateTax('abc');
```

### 3. [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

#### 3.1. Imperative loops

```javascript
const cars = [
  {
    name: 'Ford',
    price: 13_600,
  },
  {
    name: 'BMW',
    price: 78_000,
  },
  {
    name: 'Mercedes',
    price: 44_000,
  },
];

console.log('WHILE loop');
let i = 0;
while (i < cars.length) {
  console.log(`index = ${i}, array item = ${JSON.stringify(cars[i])}`);
  i++;
}

console.log('\nFOR loop');
for (let i = 0; i < cars.length; i++) {
  console.log(`index = ${i}, array item = ${JSON.stringify(cars[i])}`);
}

console.log('\nFOR IN');
for (let index in cars) {
  console.log(`index = ${index}, array item = ${JSON.stringify(cars[index])}`);
}

console.log('\nFOR OF');
for (let car of cars) {
  console.log(`array item = ${JSON.stringify(car)}`);
}
```

#### 3.2. Declarative loops

```javascript
const cars = [
  {
    name: 'Ford',
    price: 13_600,
  },
  {
    name: 'BMW',
    price: 78_000,
  },
  {
    name: 'Mercedes',
    price: 44_000,
  },
];

const displayCar = car => {
  console.log(JSON.stringify(car));
};

console.log('all cars');
cars.forEach(displayCar);

console.log('cars cheaper than 50_000');
cars.filter(car => car.price < 50_000).forEach(displayCar);

console.log('cars names');
cars.map(car => car.name).forEach(displayCar);

console.log('cars names sorted by name');
cars
  .map(car => car.name)
  .sort()
  //.sort((name1, name2) => name1.localeCompare(name2))
  .forEach(displayCar);

console.log('cars name & price string, sorted by price');
cars
  .sort((car1, car2) => car1.price - car2.price)
  .map(car => `${car.name} ${car.price}`)
  .forEach(displayCar);

console.log('cars total price');
cars.reduce((totalPrice, car) => totalPrice + car.price, 0);
```

### 4. Homework

#### 4.1 Task

```javascript
// 1. Using the following array, create a function to solve each task (the array must be passed to function as parameter), call the funtion to get the result and print it to console.
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
// 1.1 Get an array of all numbers from mixed array. Sort the array ascending.
// i.e getNumbers(mixed) should retun [1, 2, 3, 4, 5, 10]
// 1.2 Get a string composed from all strings within mixed array, concatenated by space.
// 1.3 Get the average value of all odd numbers from mixed array.
// 1.4 Get the total price of cars from mixed array.
// 1.5 Get the cars array with names having only lowercase letters.
// 1.6 Get an array of all car names from mixed array.

// For practice, try to solve the tasks first with imperative loops, and next with declarative loops.
```

#### 4.2 Solution

##### 4.2.1 Imperative (for...of loop)

```javascript
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
```

##### 4.2.2 Declarative (map/filter/reduce)

```javascript
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
const isValidNumber = value =>
  typeof value === 'number' && isNaN(value) == false;
const numbersAscendingComparator = (a, b) => a - b;
const filterAndSortNumbers = mixedArray => {
  const numbers = mixedArray.filter(isValidNumber);
  const sortedNumbers = numbers.sort(numbersAscendingComparator);
  return sortedNumbers;
};
const sortedNumbers = filterAndSortNumbers(mixed);
console.log('sortedNumbers:', sortedNumbers);

// 1.2 Get a string composed from all strings within mixed array, concatenated by space.
const isString = value => typeof value === 'string';
const getConcatenatedStrings = mixedArray => {
  return mixedArray.filter(isString).join(' ');
};
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
```

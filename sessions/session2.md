# Functions & Data Processing

```text
“Sometimes, the elegant implementation is just a function. Not a method. Not a class. Not a framework. Just a function.”    
- John Carmack
```

![](../resource/image/js_try_catch.jpg)

## Content

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

#### 3.2. Declaratve loops

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

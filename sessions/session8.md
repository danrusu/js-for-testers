# Async basics

```text
“Simplicity is about subtracting the obvious and adding the meaningful.”
- John Maeda
```

![](../resource/image/_8_async_classmate.png)

## Content

- [Async](#async)
  - [Content](#content)
    - [1. Promise](#1-promise)
    - [2. Async function](#2-async-function)
    - [3. IIFE - **I**mmediately **I**nvoked **F**unction **E**xpression](#3-iife---immediately-invoked-function-expression)
    - [4. setTimeout](#4-settimeout)
    - [5. Files IO](#5-files-io)
    - [6. Fetch API](#6-fetch-api)
    - [7. Code first api tests](#7-code-first-api-tests)
    - [8. Homework](#8-homework)

### 1. [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

**Definition:** `The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.`

A Promise is in one of these states:

- _pending_: initial state, neither fulfilled nor rejected.
- _fulfilled_: meaning that the operation was completed successfully.
- _rejected_: meaning that the operation failed.

A promise is said to be **settled** if it is either fulfilled or rejected, but not pending.

```javascript
// simplest way to create a Promise object
const promise = new Promise((resolve, reject) => {
  // evaluate rejection condition
  if (errorCondition) {
    reject(new Error('errorMessage')); // similar with throwing an error
  }
  resolve(value); // similar with returning a value
});

// Demo - Let's order some food

const stock = ['fries', 'burger', 'icecream'];

const isValidOrder = (...order) => {
  for (const food of order) {
    if (!stock.includes(food)) {
      return {
        outOfStockFood: food,
        orderStatus: false,
      };
    }
  }
  return { orderStatus: true };
};

const getFood = (...order) =>
  new Promise((resolve, reject) => {
    const { orderStatus, outOfStockFood } = isValidOrder(...order);
    if (orderStatus) {
      console.log(`... preparing ${order}`); // this should take time
      resolve(order);
    }
    reject(new Error(`${outOfStockFood} is out of stock`));
  });

const myFood = getFood('fries', 'burger');
console.log('myFood: ', myFood);

myFood
  .then(food => {
    console.log(`prepared ${food}`);
  })
  .catch(err => {
    console.log(`We are sorry, ${err.message}`);
  });
```

### 2. [Async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

`Async function` declaration:

```javascript
async function name(params) {
  // statements;
  // the await mechanism may be used
}
```

The [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) operator is used to wait for a Promise and get its fulfillment value.
It can only be used inside an async function or at the top level of a module.

Each time when an async function is called, it returns a new Promise
which will be resolved with the value returned by the async function,
or rejected with an exception uncaught within the async function.

```javascript
(async () => {
  try {
    const myFood = await getFood('fries', 'burger'); // add 'pizza' to go to the catch branch
    console.log('myFood: ', myFood);
  } catch (err) {
    console.log(`We are sorry, ${err.message}`);
  }
})();
```

### 3. [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) - **I**mmediately **I**nvoked **F**unction **E**xpression

Use cases:

- avoid polluting main namespace
- execute an async function (allows to use await)
- the module pattern

```javascript
(function () {
  // …
})();

(() => {
  // …
})();

(async () => {
  // …
})();
```

### 4. [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)

- [event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop)

- create a wait function

```javascript
const wait = timeout =>
  new Promise(resolve => {
    setTimeout(resolve, timeout);
  });

(async () => {
  await wait(3000);
  console.log('...waited for 3s');
})();
```

### 5. Files IO

- [Promises API](https://nodejs.org/api/fs.html#promises-api) - recommended
  - [example](../src/session8/fs-promise-api.js)
- [Callback API](https://nodejs.org/api/fs.html#callback-api)
- [Synchronous API](https://nodejs.org/api/fs.html#synchronous-api)
  - [example](../src/session8/fs-sync-api.js)

### 6. [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### 7. [Code first api tests](../test/session8/todo-app.api.spec.js)

### 8. Homework

Create API tests for [TODO APP](https://github.com/danrusu/node-js-todo-app) using _fetch_,
similar to the available [Postman tests](https://github.com/danrusu/node-js-todo-app/tree/master/postman).

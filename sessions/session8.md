# Async

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
    - [4. Fetch API](#4-fetch-api)
    - [5. setTimeout](#5-settimeout)
    - [6. Code first api tests](#6-code-first-api-tests)
    - [7. Homework](#7-homework)

### 1. [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

**Definition:** `The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.`

A Promise is in one of these states:

- _pending_: initial state, neither fulfilled nor rejected.
- _fulfilled_: meaning that the operation was completed successfully.
- _rejected_: meaning that the operation failed.

A promise is said to be settled if it is either fulfilled or rejected, but not pending.

```javascript
const isEven = number =>
  new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(true);
    }
    reject(new Error('number is odd'));
  });

let result;
isEven(8).then(returnedValue => {
  console.log('returnedValue: ', returnedValue);
  result = returnedValue;
});
console.log('result: ', result);

isEven(9);

isEven(9).catch(err => {
  console.log(err);
});
```

### 2. Async function

### 3. [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) - **I**mmediately **I**nvoked **F**unction **E**xpression

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

### 4. [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### 5. [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)

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

### 6. [Code first api tests](../test/session8/todo-app.api.spec.js)

### 7. Homework

Create API tests for [TODO APP](https://github.com/danrusu/node-js-todo-app) using _fetch_, similar to the available [Postman tests](https://github.com/danrusu/node-js-todo-app/tree/master/postman).

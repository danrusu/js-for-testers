# Async fun

```text
“In programming the hard part isn’t solving problems, but deciding what problems to solve.“
- Paul Graham
```

## Content

- [Async fun](#async-fun)
  - [Content](#content)
    - [1. Create a delay endpoint within TODO app](#1-create-a-delay-endpoint-within-todo-app)
    - [2. Links validation test](#2-links-validation-test)
      - [2.1 Create a few endpoints using the delay endpoit created above](#21-create-a-few-endpoints-using-the-delay-endpoit-created-above)
      - [2.2 Validate endpoints exist](#22-validate-endpoints-exist)
      - [2.3 Validate endpoint work (response code is 200), compare duration/code complexity](#23-validate-endpoint-work-response-code-is-200-compare-durationcode-complexity)

### 1. Create a delay endpoint within [TODO app](https://github.com/danrusu/node-js-todo-app)

- `/api/delay/:timeout`
- test it with Postman (add it to [collection](https://github.com/danrusu/node-js-todo-app/tree/master/postman))

### 2. Links validation test

#### 2.1 Create a few endpoints using the delay endpoit created above

```javascript
// i.e.
// http://localhost:1112/api/delay/1000
// http://localhost:1112/api/delay/2000
// http://localhost:1112/api/delay/3000
// http://localhost:1112/api/delay/4000
```

#### 2.2 Validate endpoints exist

#### 2.3 Validate endpoint work (response code is 200), compare duration/code complexity

- using sequential tests (SYNC)
- using promises (ASYNC)
  - add some links that are invalid and collect errors (soft assert)
    ```javascript
    // i.e.
    // http://localhost:1112/api/delay
    // http://localhost:1112/api/delay/x
    ```

# Async fun

```text
“In programming the hard part isn’t solving problems, but deciding what problems to solve.“
- Paul Graham
```

![](../resource/image/_9_async_sync_timeline.png)

## Content

- [Async fun](#async-fun)
  - [Content](#content)
    - [1. Promises - async vs sync](#1-promises---async-vs-sync)
    - [2. Create a delay endpoint within TODO app](#2-create-a-delay-endpoint-within-todo-app)
    - [3. Links validation test](#3-links-validation-test)
      - [3.1 Create a few endpoints using the delay endpoit created above](#31-create-a-few-endpoints-using-the-delay-endpoit-created-above)
      - [3.2 Validate endpoints exist](#32-validate-endpoints-exist)
      - [3.3 Validate endpoint work (response code is 200), compare duration/code complexity](#33-validate-endpoint-work-response-code-is-200-compare-durationcode-complexity)

### 1. Promises - async vs sync

### 2. Create a delay endpoint within [TODO app](https://github.com/danrusu/node-js-todo-app)

- `/api/delay/:timeout`
- test it with Postman (add it to [collection](https://github.com/danrusu/node-js-todo-app/tree/master/postman))

### 3. Links validation test

#### 3.1 Create a few endpoints using the delay endpoit created above

```javascript
// i.e.
// http://localhost:1112/api/delay/1000
// http://localhost:1112/api/delay/2000
// http://localhost:1112/api/delay/3000
// http://localhost:1112/api/delay/4000
```

#### 3.2 Validate endpoints exist

#### 3.3 Validate endpoint work (response code is 200), compare duration/code complexity

- using sequential tests (SYNC)
- using promises (ASYNC)
  - add some links that are invalid and collect errors (soft assert)
    ```javascript
    // i.e.
    // http://localhost:1112/api/delay
    // http://localhost:1112/api/delay/x
    ```

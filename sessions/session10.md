# Cypress Fundamentals

```text
“If you touch one thing with deep awareness, you touch everything.”
- Thich Nhat Hanh
```

![](../resource/image/_10_cypress.png)

## Content

- [Cypress Fundamentals](#cypress-fundamentals)
  - [Content](#content)
    - [1. Explore new TODO App](#1-explore-new-todo-app)
    - [2. Useful npm packages](#2-useful-npm-packages)
    - [3. Cypress](#3-cypress)
      - [3.1 Installation](#31-installation)
      - [3.2 (API Docs)\[https://docs.cypress.io/api/table-of-contents\]](#32-api-docshttpsdocscypressioapitable-of-contents)
      - [3.2 Framework structure](#32-framework-structure)
      - [3.3 (Tasks)\[https://docs.cypress.io/api/commands/task\]](#33-taskshttpsdocscypressioapicommandstask)
      - [3.3 (Custom Commands)\[https://docs.cypress.io/api/cypress-api/custom-commands\]](#33-custom-commandshttpsdocscypressioapicypress-apicustom-commands)
      - [3.4 Mixing sync and async code](#34-mixing-sync-and-async-code)
      - [3.5 First tests](#35-first-tests)

### 1. Explore new TODO App

- checkout (**cypress** branch from node-js-todo-app)[https://github.com/danrusu/node-js-todo-app/tree/cypress]
- start app
- investigate authentication

### 2. Useful npm packages

- (kill-port)[https://github.com/tiaanduplessis/kill-port]
- (wait-on)[https://github.com/jeffbski/wait-on]
- (ncp)[https://github.com/AvianFlu/ncp]

### 3. Cypress

#### 3.1 Installation

```bash
npm install cypress
```

#### 3.2 (API Docs)[https://docs.cypress.io/api/table-of-contents]

#### 3.2 Framework structure

#### 3.3 (Tasks)[https://docs.cypress.io/api/commands/task]

#### 3.3 (Custom Commands)[https://docs.cypress.io/api/cypress-api/custom-commands]

#### 3.4 Mixing sync and async code

#### 3.5 First tests

- (smoke.cy.js)[https://github.com/danrusu/node-js-todo-app/blob/cypress/cypress/e2e/smoke.cy.js]
- (auth.cy.js)[https://github.com/danrusu/node-js-todo-app/blob/cypress/cypress/e2e/auth.cy.js]

Test execution:

```bash
# run tests in headless mode
npx cypress run --browser=chrome

# run tests in headful mode (in browser)
npx cypress run --browser=chrome --headed

# run a single test
npx cypress run --browser=chrome --spec cypress/e2e/auth.cy.js

# open Cypress Launchpad and run tests in debugging mode
npx cypress open --e2e --browser=chrome
```

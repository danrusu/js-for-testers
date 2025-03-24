# Cypress Advanced

```text
"La POM-ul lăudat să nu te duci cu sacul."
```

## Content

- [Cypress Advanced](#cypress-advanced)
  - [Content](#content)
    - [1. **P**age **O**bject **M**odel (POM)](#1-page-object-model-pom)
      - [1.1 Selectors: Css vs. Xpath](#11-selectors-css-vs-xpath)
      - [1.1.1 Css selectors](#111-css-selectors)
      - [1.1.2 XPath selectors](#112-xpath-selectors)
      - [1.2 Chrome DevTools utilities](#12-chrome-devtools-utilities)
      - [1.3 Document functions for selecting elements](#13-document-functions-for-selecting-elements)
    - [2. Cypress advanced](#2-cypress-advanced)
      - [2.1 cy.intercept](#21-cyintercept)
      - [2.2 cy.session](#22-cysession)
      - [2.3 cy.request](#23-cyrequest)
      - [2.4 Cypress environment variables](#24-cypress-environment-variables)
      - [2.5 Reporter - Mocha Awesome](#25-reporter---mocha-awesome)
      - [2.6 Configuration](#26-configuration)
    - [3. Homework](#3-homework)

### 1. **P**age **O**bject **M**odel (POM)

`POM (web elements and behavior) improves code maintenance by separating the page model and the tests.`

#### 1.1 Selectors: Css vs. Xpath

#### 1.1.1 [Css selectors](https://www.w3schools.com/cssref/css_selectors.php)

| Selector            | Example                    | Description                                                                            |
| ------------------- | -------------------------- | -------------------------------------------------------------------------------------- |
| \*                  | \*                         | wildcard, select all elements                                                          |
| tagName             | input                      | select all input elements                                                              |
| #id                 | #login                     | select the elements with `id='login'`                                                  |
| .class              | .login-input               | select the elements with `class='login-input'`                                         |
| [attribute=value]   | [class="todo-id"]          | select the elements with `class='todo-id'`                                             |
| [attribute*=value]  | [class="priority-"]        | select the elements with class attribute containing 'priority-'                        |
| selector1 selector2 | [data-test="todo-2"] .name | select the elements with class name, within elements with attribute data-test="todo-2" |

Read more about `data-* ` attributes [here](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)

#### 1.1.2 [XPath selectors](https://www.w3schools.com/xml/xpath_syntax.asp)

| Selector                         | Example                                | Description                                                     |
| -------------------------------- | -------------------------------------- | --------------------------------------------------------------- |
| \*                               | //\*                                   | wildcard, select all elements                                   |
| tagName                          | //input                                | select all input elements                                       |
| @attribute                       | //\*[@class="login-input"]             | select the elements with `class='login-input'`                  |
| contains function                | //\*[contains(@class, "priority-")]    | select the elements with class attribute containing 'priority-' |
| **select by text content**       | //\*[contains(text(), "JS4Testers 8")] | select the elements that contains the 'JS4Testers 8' text       |
| **select by exact text content** | //\*[normalize-space()="JS4Testers 8"] | select the elements that has exact 'JS4Testers 8' text          |

#### 1.2 Chrome DevTools utilities

```javascript
// warning: $ can be overwritten if jQuery is used
$('cssSelector'); // select first element by cssSelector
$$('cssSelector'); // select all elements by cssSelector
$x('XPathSelector'); // select all elements using XPath
```

#### 1.3 Document functions for selecting elements

```javascript
// generic
document.querySelector('cssSelector'); // select first element by cssSelector
document.querySelectorAll('cssSelector'); // select all elements by cssSelector

// custom
document.getElementById('elementId');
document.getElementsByClassName('className');
document.getElementsByTagName('tagName');
```

1.4 Simple page object model example (pseudocode)

```javascript
// loginPage.js
// SELECTORS
const USERNAME_INPUT = '[data-test]=username';
const PASSWORD_INPUT = '[data-test]=password';
const LOGIN_BUTTON = '[data-test]=login';

// PAGE ACTIONS
function login(username, password) {
  // the driver object is a dependency that handles browser communication
  driver.find(USERNAME_INPUT).type(username);
  driver.find(PASSWORD_INPUT).type(password);
  driver.find(USERNAME_INPUT).click();
}
export { login };

// login.spec.js
import { login } from 'loginPage';

driver.navigateTo(LOGIN_PAGE_URL);

login(procces.env.username, process.env.password);

assertUserHomePage(driver); // test bussiness logic
```

1.5 [TODO App page objects](https://github.com/danrusu/node-js-todo-app/tree/master/cypress/support/pages)

### 2. Cypress advanced

#### 2.1 [cy.intercept](https://docs.cypress.io/api/commands/intercept)

Examples:

- [poc-local-html-intecept.cy.js](https://github.com/danrusu/node-js-todo-app/blob/master/cypress/e2e/poc-local-html-intecept.cy.js)

- [poc-local-html](https://github.com/danrusu/node-js-todo-app/blob/master/cypress/e2e/poc-local-html.cy.js)

#### 2.2 [cy.session](https://docs.cypress.io/api/commands/session)

- [Documentation](https://docs.cypress.io/api/cypress-api/session)

Example:

- [regression.cy.js](https://github.com/danrusu/node-js-todo-app/blob/master/cypress/e2e/regression.cy.js)

#### 2.3 [cy.request](https://docs.cypress.io/api/commands/request)

Example:

- [auth.api.cy.js](https://github.com/danrusu/node-js-todo-app/blob/master/cypress/e2e/auth.api.cy.js)

#### 2.4 [Cypress environment variables](https://docs.cypress.io/app/references/environment-variables)

#### 2.5 [Reporter - Mocha Awesome](https://github.com/LironEr/cypress-mochawesome-reporter)

#### 2.6 [Configuration](https://docs.cypress.io/app/references/configuration)

- [Global](https://docs.cypress.io/app/references/configuration)
- [Timeouts](https://docs.cypress.io/app/references/configuration#Timeouts)
- [Folders / Files](https://docs.cypress.io/app/references/configuration#Folders--Files)
- [Screenshots](https://docs.cypress.io/app/references/configuration#Screenshots) & [Videos](https://docs.cypress.io/app/references/configuration#Videos)
- [E2E tests options](https://docs.cypress.io/app/references/configuration#e2e)

### 3. Homework

Think about what you would test as regression for the TODO App and add extend [regression.cy.js](https://github.com/danrusu/node-js-todo-app/blob/master/cypress/e2e/regression.cy.js) or create new test files using Cypress.

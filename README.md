# js-for-testers

**_Explore, collaborate and learn together._**

```text
“When you’re curious, you find lots of interesting things to do.”
- Walt Disney
```

## Content

- [js-for-testers](#js-for-testers)
  - [Content](#content)
  - [Goal: Build some useful skills and have fun.](#goal-build-some-useful-skills-and-have-fun)
  - [Important - Anonymous Feedback](#important---anonymous-feedback)
  - [Topics summary](#topics-summary)
    - [1. Prerequisites](#1-prerequisites)
    - [2. Structure](#2-structure)
    - [3. Events - 2025](#3-events---2025)
    - [4. Resource](#4-resource)

## Goal: Build some useful skills and have fun.

## Important - [Anonymous Feedback](https://testutils.com/feedback)

## Topics summary

- Develop basic coding skills, using JavaScript
- Chrome Dev Tools - Console, Network, Elements, Sources (Snippets), Lighthouse
- VS Code
- Node.js, npm, versioning and publishing npm packages
- Git, Github, Git Bash, Markdown, Git Hooks (husky)
- Pipeline - GitHub Actions and Workflows, Docker, Bash
- Test framework - Mocha / Vitest
- Assertion library - Chai
- JSDoc
- Automation concepts
- Code quality - principles (DRY, KISS, YAGNI), tools
- Code coverage - Istanbul / nyc
- Web pages - HTML, CSS
- REST, API testing
- Tools: Postman, Cypress, Playwright
- TypeScript basics, resources

`PS. This series is more a teaser than an end to end training. Everything that I will present is prefixed with IMHO.`

### 1. Prerequisites

- Chrome browser (latest)
- [NodeJS](https://nodejs.org/en/download), preferable the latest LTS version - 22.14.0

### 2. Structure

| #   | Date       | Title                                                 | Topics                                                                                                                                                      | Practice                                        |
| --- | ---------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| 1   | 21.05.2024 | [Let's speak JS](./sessions/session1.md)              | Chrome DevTools (Console, Snippets), JS introduction                                                                                                        |                                                 |
| 2   | 23.07.2024 | [Functions & Data Processing](./sessions/session2.md) | Functions, Exceptions, Arrays, Loops                                                                                                                        | [Homework](./sessions/session2.md#4-homework)   |
| 3   | 20.08.2024 | [Node.js & VSCode](./sessions/session3.md)            | VSCode, Node.js, npm                                                                                                                                        | [Homework](./sessions/session3.md#4-homework)   |
| 4   | 17.09.2024 | [Git & Github](./sessions/session4.md)                | Git, GitHub, Bash, vi                                                                                                                                       |                                                 |
| 5   | 01.10.2024 | [Lets's code](./sessions/session5.md)                 | Algorithms, Conditional logging, TDD, code coverge, exporting with index.js                                                                                 | [Homework](./sessions/session5.md#7-homework)   |
| 6   | 22.10.2024 | [Publishing](./sessions/session6.md)                  | Npm registry, publish npm utilities package, versioning, Git tags                                                                                           | [Homework](./sessions/session6.md#8-homework)   |
| 7   | 12.11.2024 | [APIs & Postman](./sessions/session7.md)              | HTTP requests, Postman, Express App, HTML                                                                                                                   |                                                 |
| 8   | 18.12.2024 | [Async basics](./sessions/session8.md)                | Async functions, Promises, fetch API, files I/O                                                                                                             | [Homework](./sessions/session8.md/#8-homework)  |
| 9   | 14.01.2025 | [Async fun](./sessions/session9.md)                   | Promise.all, Promise.allSettled, parallel I/O demo, links validation, for await of, async array mapping, soft assert                                        |                                                 |
| 10  | 18.02.2025 | [Cypress fundamentals](./sessions/session10.md)       | E2E testing, Framewok structure, cy.task, UI simple flow validation                                                                                         |                                                 |
| 11  | 25.03.2025 | [Cypress advanced](./sessions/session11.md)           | Page Object Model, web elements selectors + DOM & DevTools utils, **local HTML test POC**, cy.intercept, cy.session, cy.request, Cypress.env, configuration | [Homework](./sessions/session11.md/#3-homework) |
| 12  | TBA        | [Playwright](./sessions/session12.md)                 | E2E testing                                                                                                                                                 |                                                 |
| 13  | TBA        | [Test frameworks](./sessions/session13.md)            | Mocha vs. Vitest, use cases                                                                                                                                 |                                                 |
| 14  | TBA        | [Docker & Pipeline](./sessions/session14.md)          | Docker, GitHub workflows, secrets, branch rules, publish automatically, hooks (Husky)                                                                       |                                                 |

### 3. Events - 2025

| Date       | Event                                                                         | Location  |
| ---------- | ----------------------------------------------------------------------------- | --------- |
| May 20     | [WeTest Athens](https://www.eventora.com/en/Events/wetestathens-2025)         | Athens    |
| May 21     | [Codecamp_Timisoara](https://codecamp.ro/conferences/codecamp-timisoara-2025) | Timisoara |
| May 28-31  | [CityJS Athens](https://greece.cityjsconf.org/)                               | Athens    |
| June 12,16 | [JSNation](https://jsnation.com/)                                             | Amsterdam |
| October 16 | [Codecamp_Cluj-Napoca](https://codecamp.ro/conferences/codecamp_cluj-napoca/) | Cluj      |
| October 30 | [Codecamp_Brasov](https://codecamp.ro/conferences/codecamp_brasov/)           | Brasov    |

### 4. Resource

- [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

- [W3Schools](https://www.w3schools.com/js/) - useful for fundamentals and reference

- Chrome DevTools

  - [Documentation](https://developer.chrome.com/docs/devtools)
  - [Developer news - Jecelyn Yeen](https://www.linkedin.com/in/jecfish/)
  - [Freeze screen & inspect disappearing elements](https://www.youtube.com/watch?v=Qzmb9bdNzZ4)

- Books

  - [Eloquent JavaScript](https://eloquentjavascript.net/)

- Unit test frameworks

  - [Mocha](https://mochajs.org/)
    - [CLI usage](https://mochajs.org/#command-line-usage)
    - [Mochawesome reporter](https://www.npmjs.com/package/mochawesome)
  - [Vitest](https://vitest.dev/)
  - [Jest](https://jestjs.io/)

- [Chai](https://www.chaijs.com/) - assertion library

- [Istanbul](https://github.com/istanbuljs/nyc) - code coverage tool

- [Sinon](https://sinonjs.org/) - mocks, spies, stubs

- **Test automation frameworks**

  - [Cypress](https://www.cypress.io/)
  - [Playwright](https://playwright.dev/)
  - [WebdriverIO](https://webdriver.io/)
  - [Puppeteer](https://pptr.dev/)
  - [Postman](https://www.postman.com/)

- [learning-resources](https://github.com/danrusu/learning-resources) repository - grouped tutorials links.

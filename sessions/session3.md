# Node.js & VSCode

```text
“There are two ways of constructing a software design:
One way is to make it so simple that there are obviously no deficiencies,
and the other way is to make it so complicated that there are no obvious deficiencies.
The first method is far more difficult.”    
- Tony Hoare
```

![](../resource/image/backend_frontend.jpg)

## Content

- [Node.js \& VSCode](#nodejs--vscode)
  - [Content](#content)
    - [1. VSCode](#1-vscode)
      - [1.1 Shortcuts](#11-shortcuts)
      - [1.2 Plugins](#12-plugins)
      - [1.3 JavaScript Debug Terminal](#13-javascript-debug-terminal)
    - [2. Node.js](#2-nodejs)
      - [2.1 Installation](#21-installation)
      - [2.2 Run a simple JS file](#22-run-a-simple-js-file)
    - [3. npm - node package manager](#3-npm---node-package-manager)
    - [4. Homework](#4-homework)

### 1. [VSCode](https://code.visualstudio.com)

#### 1.1 [Shortcuts](https://code.visualstudio.com/docs/getstarted/keybindings)

- [Shortcuts Cheat Sheet](../resource/vs_code_shortcuts.pdf)

- Settings/Search

| Action                  | Keyboard Shortcut |
| ----------------------- | ----------------- |
| Command Pallete         | CTRL + SHIFT + P  |
| File Search             | CTRL + P          |
| Text Search (Workspace) | CTRL + SHIFT + F  |
| Open Recent             | CTRL + R          |
| Settings                | CTRL + ,          |
| Terminal                | CTRL + `          |

- Code

| Action             | Keyboard Shortcut        |
| ------------------ | ------------------------ |
| Rename             | F2                       |
| Next Error/Warning | F8                       |
| Duplicate Code     | SHIFT + ALT + DOWN ARROW |
| Move Code UP/DOWN  | ALT + UP/DOWN ARROW      |
| Comment Code       | CTRL + /                 |
| Block Comment      | CTRL + SHIFT + /         |
| Collapse all       | CTRL + K CTRL + 0        |
| Expand all         | CTRL + K CTRL + J        |
| Trigger Suggest    | CTRL + Space             |
| Quick Fix          | CTRL + .                 |
| Go to Line         | CTRL + G                 |

#### 1.2 Plugins

- [Prettier](https://prettier.io/docs/en/) - code formatter

  - [CLI](https://prettier.io/docs/en/cli)
  - [Ignore files/code](https://prettier.io/docs/en/ignore) - use **.prettierignore** file or [inline comments](https://prettier.io/docs/en/ignore.html#javascript)
  - Configuration [**.prettierrc**](https://prettier.io/docs/en/configuration)

  ```json
  {
    "printWidth": 80,
    "tabWidth": 2,
    "singleQuote": true,
    "arrowParens": "avoid",
    "trailingComma": "all",
    "semi": true,
    "bracketSpacing": true,
    "overrides": [
      {
        "files": [".prettierrc"],
        "options": {
          "parser": "json"
        }
      }
    ]
  }
  ```

  - **Format on save** - open Settings and use search box to

    - set _Editor: Default Formatter_ to Prettier
    - enable _Editor: Format On Save_ checkbox

  - Check all project files formatting

  ```bash
  npx prettier --check .
  ```

  - Format all project files

  ```bash
  npx prettier --write .
  ```

#### [1.3 JavaScript Debug Terminal](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_javascript-debug-terminal)

```javascript
// try to debug this simple code; add variables/expressions to the Watch
// debug the same code in browser (snippet, or html page script)
const taxes = [100, 500, 900]; // add a breakpoint here
const totalTax = taxes.reduce(sum, 0);
console.log('Total tax: ', totalTax);
function sum(acc, item, index) {
  console.log(`... adding tax #${index + 1}`);
  acc = acc + item; // add a breakpoint here
  return acc;
}
```

### 2. [Node.js](https://nodejs.org/en)

#### 2.1 Installation

- Install latest LTS version available (it will also install **npm**)
- [nvm](https://github.com/nvm-sh/nvm) - if you need to switch Node.js versions

- Verify **Node.js** and **npm** versions
  ```bash
  node --version
  npm --version
  ```

#### 2.2 Run a simple JS file

```bash
echo 'console.log("Hello world!")' > test.js
node test.js
```

### 3. [npm](https://docs.npmjs.com) - node package manager

- Tutorials

  - [Package Management in JavaScript with npm and Yarn, 2022, Joe Eames](https://app.pluralsight.com/library/courses/javascript-npm-yarn-package-management)

- [CLI](https://docs.npmjs.com/cli/v7/commands)

- help

  ```bash
  npm -h
  npm <command> -h # quick command help
  mpm help <term> # online search for help on <term>
  ```

- Upgrade to the latest version available

  ```bash
  npm install -g npm
  npm --version
  ```

- Create a npm package

```bash
 npm init --yes #it will create the package.json file
```

- [package.json](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)

- Install/uninstall dependencies to/from **node_modules** folder

```bash
# add dependency
npm install lodash # try _.cloneDeep()
# add dev dependency
npm install -D prettier mocha chai
npm list # list dependencies; "ls" is an alias for list command
# usefull flags --all, --depth <depth>, -g (global installed packages)

# remove node_modules folder (all installed dependencies)
rm -rf node_modules
# install all project dependencies
npm install # shorter version: npm i

# remove all previously installed dependencies (from both node_modules and package.json)
npm uninstall lodash prettier mocha chai
```

- Show package info

```bash
# npm [view/info/show/v] package-name
npm info mocha # check out one of the mocha open source maintainers page - https://www.joshuakgoldberg.com/
npm repo mocha # opens GitHub repository for a package
```

- [npx](https://www.npmjs.com/package/npx) - execute npm package binary

  - [freeCodeCamp tutorial - **npm vs. npx**](https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/)

- [npm versioning](https://docs.npmjs.com/about-semantic-versioning)
  ```bash
  npm version [major|minor|patch] #update package version
  ```

### 4. Homework

Extract and use utilities (all functions) from [homework-declarative.js](../src/session2/homework-declarative.js) and [homework-imperative.js](../src/session2/homework-imperative.js) to [utils.js](../src/session2/utils.js).
Watch code execution by setting breakpoints and using javascript debugger terminal.
You have scripts added in [package.json](../package.json) for running both homework solutions.

```bash
npm run s2-hi # runs homework-imperative.js
npm run s2-hd # runs homework-declarative.js
```

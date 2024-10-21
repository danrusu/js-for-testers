# Publishing

```text
“Clean code always looks like it was written by someone who cares.”
- Michael Feathers
```

![](../resource/image/my_old_code.jpg)

## Content

- [Publishing](#publishing)
  - [Content](#content)
    - [1. Create NPM account: https://www.npmjs.com/](#1-create-npm-account-httpswwwnpmjscom)
    - [2. Set `.npmrc` - global (~/.npmrc) or local, in the project root (if local, add it to .gitignore)](#2-set-npmrc---global-npmrc-or-local-in-the-project-root-if-local-add-it-to-gitignore)
    - [3. New utilities GitHub repository](#3-new-utilities-github-repository)
    - [4. NPM publish](#4-npm-publish)
    - [5. Git tags](#5-git-tags)
    - [6. Npm version](#6-npm-version)
    - [7. Use the published npm package from this repository code](#7-use-the-published-npm-package-from-this-repository-code)
    - [8. Homework](#8-homework)

### 1. Create NPM account: https://www.npmjs.com/

- you can link your GitHub account for account recovery
- you can add a 2FA - in our demo I'll use Authenticator app
- create and save locally an access token (Granular Access Token) here - https://www.npmjs.com/settings/danginkgo/tokens
  - set `Packages and scopes / Permisions: Read and write`

### 2. Set `.npmrc` - global (~/.npmrc) or local, in the project root (if local, add it to .gitignore)

```bash
registry=https://registry.npmjs.org/ # default npm registry
@danginkgo:registry=https://registry.npmjs.org/ #set registry for @danginkgo scope

//registry.npmjs.org/:_authToken=<AUTH_TOKEN from www.npmjs.com/settings/danginkgo/tokens> #authenticate via npm account acces token

#defaults
init-author-name=Dan Rusu
init-author-email=danginkgo@yahoo.com
init-license=MIT
```

### 3. New utilities GitHub repository

- create a new repository named `util` (add only README.md & LICENSE)
- clone the repository locally
- init the project to be a scoped npm package, use `@npm-user-name` as scope

```bash
npm init --scope=@danginkgo
package name: (@danginkgo/util)
version: (1.0.0)
description: JS utilities
entry point: (index.js)
test command:
git repository: https://github.com/danrusu/demo-util.git
keywords: utilities
license: (MIT)
```

- add a formatter configuration - `.prettierrc`

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

- install dependencies
  ```bash
  npm i -D prettier mocha chai@4.x mochawesome
  ```
  - set the test script in package.json: `mocha --forbid-only --fail-zero --reporter mochawesome test/**/*.spec.js`
- add `src` and `test` folders

  - create some function within `src`, add tests for it in `test` folder
  - create `src/index.js` and add the function it's `module.exports`

- add a `.gitignore` for
  - `node_modules`
  - `.npmrc`
  - `mochawesome-reort`
- add a `prepublishOnly` script to package.json and set it to `npm test`

### 4. NPM publish

```bash
# run this from VSCode terminal
npm whoami
npm login [--auth-type legacy] [--otp=<otpFromApp>] #by default auth-type is web
# a browser will open https://www.npmjs.com/login to sign in
# Fill in: Username: your-npm-username (not the email), Password and OTP
npm whoami
npm publish [--access=public]
```

- for publishing with public access you can use this in package.json

```json
"publishConfig": {
  "registry": "https://registry.npmjs.org/",
  "access": "public",
}
```

- view online package information

```bash
npm info @danginkgo/util
npm info @danginkgo/util versions --json
npm info @danginkgo/util dist-tags --json
```

### 5. Git tags

- create git tags for commits coresponding to the npm published versions
- if you use `npm version`, it will automatically create git tags locally

```bash
git tag v1.0.0 # create tag v1.0.0

git tag # lists local tags
git ls-remote --tags origin # list remote tags

git git push origin v1.0.0 # push tag v1.0.0 to remote
git push origin --tags # push all local tags to remote

git fetch --tags # fetch all tags from remote

git tag -d v2.0.0 # delete local tag
git push --delete origin v2.0.0 # delete remote tag
```

### 6. Npm version

```bash
# lets assume the current version is v1.0.0
npm version patch # creates the next patch version v1.0.1, and a local git tag v1.0.1
npm version minor # creates the next minor version v1.1.0, and a local git tag v1.1.0
npm version major # creates the next major version v2.0.0, and a local git tag v2.0.0
```

### 7. Use the published npm package from this repository code

- install `@danginkgo/util` as dependency
- take a look at what was installed to `node_modules` for `@danginkgo/util`
- use the utilities `@danginkgo/util` exports [here](../src/session6/use-util-package.js)

### 8. Homework

- For the `util` repository, create a GitHub workflow that runs the unit tests (unit-test.yml) for every pull request to master branch or by manual trigger.
- Add a test badge for the called `Unit tests` for the unit tests workflow

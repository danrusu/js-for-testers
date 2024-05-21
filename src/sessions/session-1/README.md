# Let's speak JS

```text
“You can never cross the ocean until you have the courage to loose sight of the shore.”    
- Cristopher Columbus
```

![JS try catch](../../../resource/image/works_why.jpg)

## Content

### 1. [Chrome DevTools](https://developer.chrome.com/docs/devtools)

#### 1.1. [Console](https://developer.chrome.com/docs/devtools/console)

#### 1.2. [Sources/Snippets](https://developer.chrome.com/docs/devtools/javascript/snippets)

### 2. JS introduction

#### 2.1. [console.log](https://developer.mozilla.org/en-US/docs/Web/API/console/log_static)

#### 2.2. [Primitives](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

#### 2.3. [Typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

```javascript
const name = 'John';
let age = 30;
let isEmployed = true;
let salary;
const obj = null;
const job = {
  title: 'qa',
  level: 5,
};
const jobs = ['dev', 'qa', 'dev-ops'];

logTable({
  name,
  age,
  isEmployed,
  salary,
  obj,
  job,
  jobs
});

function Info(name, value) {
  this.name = name;
  this.value = value;
  this.typeof = typeof value;
}

function logTable(obj) {
  const processedObj = Object.entries(obj)
    .map(([key,val]) => new Info(key,val));
  console.table(processedObj);
}
```

#### 2.4. [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

#### 2.5. [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

#### 2.6. [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

#### 2.7. [Object](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)

### 3. Resources

- [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

- [W3Schools](https://www.w3schools.com/js/)

### 4. Q&A

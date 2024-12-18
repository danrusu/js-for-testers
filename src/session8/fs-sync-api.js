const { writeFileSync: writeFile, readFileSync: readFile } = require('node:fs');
const { join } = require('node:path');

const UTF8 = 'utf8';

const docsFilePath = join(__dirname, 'data', 'fs-api-docs.json');
const docsBuffer = readFile(docsFilePath);
console.log(docsBuffer);

const docsString = docsBuffer.toString(UTF8);
console.log(docsFilePath, '\n', docsString);

console.log('Process json content:');
const docsJson = JSON.parse(docsString);
for (let [k, v] of Object.entries(docsJson)) {
  console.log(k, '|', v);
}

const doscUrls = Object.values(docsJson);
const docsUrlsFilePath = join(__dirname, 'data', 'docs-urls.json');
writeFile(docsUrlsFilePath, JSON.stringify(doscUrls, null, 2), UTF8);

const docsUrlsFileContent = readFile(docsUrlsFilePath).toString(UTF8);
console.log('\n', docsUrlsFilePath, '\n', docsUrlsFileContent);

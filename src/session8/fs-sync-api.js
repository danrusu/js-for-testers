const { writeFileSync, readFileSync } = require('node:fs');
const { join } = require('node:path');

const UTF8 = 'utf8';

const docsFilePath = join(__dirname, 'fs-api-docs.json');

const docsBuffer = readFileSync(docsFilePath);
const docsString = docsBuffer.toString(UTF8);
console.log(docsFilePath, '\n', docsString);

console.log('Process json content:');
const docsJson = JSON.parse(docsString);
for (let [k, v] of Object.entries(docsJson)) {
  console.log(k, '|', v);
}

const doscUrls = Object.values(docsJson);
const docsUrlsFilePath = join(__dirname, 'docs-urls.json');
writeFileSync(docsUrlsFilePath, JSON.stringify(doscUrls, null, 2), UTF8);

const docsUrlsFileContent = readFileSync(docsUrlsFilePath).toString(UTF8);
console.log('\n', docsUrlsFilePath, '\n', docsUrlsFileContent);

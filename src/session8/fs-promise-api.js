const { writeFile, readFile } = require('node:fs/promises');
const { join } = require('node:path');

const UTF8 = 'utf8';

(async () => {
  const docsFilePath = join(__dirname, 'fs-api-docs.json');
  // const docsFilePath = join('src', 'session8', 'fs-api-docs.json');
  // const docsFilePath = 'src/session8/fs-api-docs.json';

  const docsBuffer = await readFile(docsFilePath);
  const docsString = docsBuffer.toString(UTF8);
  console.log(docsFilePath, '\n', docsString);

  console.log('Process json content:');
  const docsJson = JSON.parse(docsString);
  for (let [k, v] of Object.entries(docsJson)) {
    console.log(k, '|', v);
  }

  const doscUrls = Object.values(docsJson);
  const docsUrlsFilePath = join(__dirname, 'docs-urls.json');
  await writeFile(docsUrlsFilePath, JSON.stringify(doscUrls, null, 2), UTF8);

  const docsUrlsFileContent = (await readFile(docsUrlsFilePath)).toString(UTF8);
  console.log('\n', docsUrlsFilePath, '\n', docsUrlsFileContent);
})();

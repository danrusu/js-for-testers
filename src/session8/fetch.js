require('dotenv').config();

function getToDoAuth() {
  const { TODO_USERNAME: username, TODO_PASSWORD: password } = process.env;
  if (!username || !password) {
    throw new Error('Need credentials for TODO APP in .env');
  }
  const base64Encoded = Buffer.from(`${username}:${password}`).toString(
    'base64',
  );
  return `Basic ${base64Encoded}`;
}

(async () => {
  const authorization = getToDoAuth();
  const response = await fetch('http://localhost:1112/api/health-check', {
    headers: {
      authorization,
    },
  }); // default HTTP method is GET
  console.log('RESPONSE');
  console.log('status\n  ', response.status, response.statusText);

  const responseHeaders = response.headers;
  // console.log('headers', responseHeaders);

  console.log('headers');
  responseHeaders.forEach((value, key) => {
    console.log(`  ${key}: ${value}`);
  });

  const isBodyJson = responseHeaders
    .get('content-type')
    .includes('application/json');

  if (isBodyJson) {
    const bodyJson = await response.json();
    console.log('body', JSON.stringify(bodyJson, null, 2));
  } else {
    const body = await response.text();
    console.log('body\n  ', body);
  }
})();

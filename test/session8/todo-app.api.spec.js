require('dotenv').config();
const { expect } = require('chai');

function getToDoAuth() {
  const { TODO_USERNAME: username, TODO_PASSWORD: password } = process.env;
  if (!username || !password) {
    return;
  }
  const base64Encoded = Buffer.from(`${username}:${password}`).toString(
    'base64',
  );
  return `Basic ${base64Encoded}`;
}

describe('TODO-APP API test', () => {
  it('healthcheck test', async () => {
    const authorization = getToDoAuth();
    console.log(authorization);
    const response = await fetch('http://localhost:1112/api/health-check', {
      //method: 'GET',
      headers: {
        authorization,
      },
    }); // default HTTP method is GET
    console.log('RESPONSE');
    console.log('status\n  ', response.status, response.statusText);

    expect(response.status).equals(200);
    expect(await response.json()).deep.equals({
      status: 'healthy',
    });
  });
});

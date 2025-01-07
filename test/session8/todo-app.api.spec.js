require('dotenv').config();
const { expect } = require('chai');

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

// this tests depends on another repository (can be moved there) - https://github.com/danrusu/node-js-todo-app
describe.skip('TODO-APP API test', () => {
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

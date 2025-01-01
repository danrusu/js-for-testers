require('dotenv').config();
const { expect } = require('chai');
const { getToDoAuth } = require('../test-utils/todo-app-util');

describe('TODO-APP API test', () => {
  let authorization;

  before(() => {
    authorization = getToDoAuth();
  });

  it('healthcheck test', async () => {
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

  // HOMEWORK
});

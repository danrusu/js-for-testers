require('dotenv').config();
const { expect } = require('chai');
const { getToDoAuth } = require('../test-utils/todo-app-util');
const { LINKS } = require('./links');

describe('Test links exist (have corresponding backend endpoints)', function () {
  let authorization;

  before(() => {
    authorization = getToDoAuth();
  });

  for (const link of LINKS) {
    it(`test link ${link}`, async () => {
      const response = await fetch(link, {
        method: 'HEAD',
        headers: {
          authorization,
        },
      });
      expect(response.status).equals(200);
    });
  }
});

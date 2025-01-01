require('dotenv').config();
const { expect } = require('chai');
const { getToDoAuth } = require('../test-utils/todo-app-util');
const { LINKS } = require('./links');

describe(
  'Link validation (SYNC)',
  function () {
    this.timeout(20_000);

    let authorization;

    before(() => {
      authorization = getToDoAuth();
    });

    for (const link of LINKS) {
      it(`test link ${link}`, async () => {
        const response = await fetch(link, {
          headers: {
            authorization,
          },
        });
        expect(response.status).equals(200);
      });
    }
  },
  {},
);

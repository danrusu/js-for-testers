require('dotenv').config();
const { expect } = require('chai');
const { getToDoAuth } = require('../test-utils/todo-app-util');
const { SoftAssert } = require('../test-utils/soft-assert');
const { LINKS } = require('./links');

describe('Link validation (ASYNC)', function () {
  this.timeout(20_000);

  let authorization;

  before(() => {
    authorization = getToDoAuth();
  });

  it(`test all links`, async () => {
    const getLinkResponse = async link => {
      const response = await fetch(link, {
        headers: {
          authorization,
        },
      });
      return { link, response };
    };

    const linkResponsesPromises = LINKS.map(link => getLinkResponse(link)); // start async requests for all links

    const linkResponses = await Promise.all(linkResponsesPromises); // wait for all async requests responses

    const softAssert = new SoftAssert();

    for (const linkResponse of linkResponses) {
      softAssert.add(() => {
        try {
          expect(linkResponse.response.status).equals(200);
        } catch (err) {
          throw new Error(
            JSON.stringify({
              err: err.message,
              link: linkResponse.link,
            }),
          );
        }
      });
    }

    softAssert.assertAll();
  });
});

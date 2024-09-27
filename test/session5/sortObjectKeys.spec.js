const { expect } = require('chai');
const { sortObjectKeys, sortObjectKeys2 } = require('../../src/session5');

const TEST_DATA = {
  input: {
    c: 102,
    a: 100,
    b: 101,
    d: 103,
  },
  expectedOutput: {
    a: 100,
    b: 101,
    d: 103,
    c: 102,
  },
};

describe('sortObjectKeys test', () => {
  it('should sort object keys alphabetically', () => {
    expect(sortObjectKeys(TEST_DATA.input)).to.deep.equal(
      TEST_DATA.expectedOutput,
    );
  });
});

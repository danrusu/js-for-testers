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
    c: 102,
    d: 103,
  },
};

describe('sortObjectKeys test', () => {
  it('does not modify key-value pairs', () => {
    expect(sortObjectKeys(TEST_DATA.input)).to.deep.equal(
      TEST_DATA.expectedOutput,
    );
  });

  it('sorts object keys alphabetically', () => {
    const objWithSortedKeys = sortObjectKeys(TEST_DATA.input);
    const sortedKeys = Object.keys(objWithSortedKeys);
    const expectedKeys = Object.keys(TEST_DATA.expectedOutput);
    expect(sortedKeys).to.deep.equal(expectedKeys);
  });
});

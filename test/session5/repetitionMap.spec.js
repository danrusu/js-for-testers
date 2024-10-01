const { expect } = require('chai');
const { repetitionMap } = require('../../src/session5');

const TEST_DATA = {
  input: ['red', 'green', 'blue', 'red', 'red', 'blue'],
  expectedOutput: {
    green: 1,
    blue: 2,
    red: 3,
  },
};

describe('repetitionMap test', () => {
  it('should return repetition info', () => {
    expect(repetitionMap(TEST_DATA.input)).to.deep.equal(
      TEST_DATA.expectedOutput,
    );
  });
  it('should return repetition info sorted by values', () => {
    const outputKeys = Object.keys(repetitionMap(TEST_DATA.input));
    expect(outputKeys).to.deep.equal(Object.keys(TEST_DATA.expectedOutput));
  });
});

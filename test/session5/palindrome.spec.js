const { expect } = require('chai');
const { isPalindrome, isPalindrome2 } = require('../../src/session5');

const TEST_DATA = [
  // [input, expectedOutput]
  ['', true],
  ['x', true],
  ['maoam', true],
  ['mm', true],
  ['yoyo', false],
  ['ab', false],
];

const testPalindrome =
  palindromeFunction =>
  ([input, expectedOutput]) => {
    it(`should return ${expectedOutput} for ${input}`, () => {
      const output = palindromeFunction(input);
      expect(output).equals(expectedOutput);
    });
  };

[isPalindrome, isPalindrome2].forEach(palindromeFunction => {
  describe(`${palindromeFunction.name} test`, () => {
    TEST_DATA.forEach(testPalindrome(palindromeFunction));
  });
});

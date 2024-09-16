const { expect } = require('chai');
const { triangle } = require('../../src/session4/triangle');

describe('Triangle validation suite', () => {
  it('returns equilateral triangle', () => {
    const result = triangle(5, 5, 5);
    expect(result).equals('equilateral triangle');
  });
  it('throws for non number inputs', () => {
    const functionToAsert = () => {
      triangle();
    };
    expect(functionToAsert).to.throw(/Invalid/);
  });
});

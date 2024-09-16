const { expect } = require('chai');
const { triangle, TRIANGLE_TYPE } = require('../../src/session4/triangle');
const { NOT_A_TRIANGLE, TRIANGLE, ISOSCELES, EQUILATERAL } = TRIANGLE_TYPE;

describe('Triangle validation suite', () => {
  it('throws if inputs are not numbers', () => {
    const functionToAsert = () => {
      triangle();
    };
    expect(functionToAsert).to.throw(Error);
    expect(functionToAsert).to.throw(/Invalid input/);
  });

  it('throws if inputs are not positive numbers', () => {
    const functionToAsert = () => {
      triangle(2, 5, 0);
    };
    expect(functionToAsert).to.throw(Error);
    expect(functionToAsert).to.throw(/Invalid input/);
  });

  it('returns equilateral triangle', () => {
    const result = triangle(5, 5, 5);
    expect(result).equals(EQUILATERAL);
  });

  it('returns isosceles triangle', () => {
    const result = triangle(3, 3, 5);
    expect(result).equals(ISOSCELES);
  });

  it('returns triangle', () => {
    const result = triangle(3, 4, 5);
    expect(result).equals(TRIANGLE);
  });

  it('returns not a triangle', () => {
    const result = triangle(2, 3, 5);
    expect(result).equals(NOT_A_TRIANGLE);
  });
});

/*
Write a function that receives 3 numbers as input 
and returns if the numbers can be the sides of a triangle.
Rules: 
- throw 'Invalid input. Expecting 3 positive numbers as params.' error 
if inputs are not posivive numbers

- return value (text):
  - not a triangle
  - triangle
  - isosceles triangle
  - equilateral triangle
*/

const TRIANGLE_TYPE = {
  NOT_A_TRIANGLE: 'not a triangle',
  TRIANGLE: 'triangle',
  ISOSCELES: 'isosceles triangle',
  EQUILATERAL: 'equilateral triangle',
};
const { NOT_A_TRIANGLE, TRIANGLE, ISOSCELES, EQUILATERAL } = TRIANGLE_TYPE;

function validatePositiveNumber(value) {
  const error = new Error(
    'Invalid input. Expecting 3 positive numbers as params.',
  );
  if (typeof value !== 'number') {
    throw error;
  }
  if (value <= 0) {
    throw error;
  }
}

function triangle(a, b, c) {
  [a, b, c].forEach(validatePositiveNumber);

  if (a === b && b === c) {
    return EQUILATERAL;
  }

  if (a + b > c && a + c > b && b + c > a) {
    if (a === b || b === c || a === c) {
      return ISOSCELES;
    }
    return TRIANGLE;
  }
  return NOT_A_TRIANGLE;
}

module.exports = {
  triangle,
  TRIANGLE_TYPE,
};

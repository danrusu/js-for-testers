/*
Write a function that receives 3 numbers as input 
and returns if the numbers can be the sides of a triangle:

- throw 'Invalid inputs. Expecting numbers only.' if any of the inputs is not a number

return value (text):
  - cannot form triangle
  - isosceles triangle
  - equilateral triangle
*/

function triangle(a, b, c) {
  if (typeof a !== 'number') {
    throw new Error('Invalid input. Expecting number.');
  }
  return '';
}

module.exports = {
  triangle,
};

// try to debug this simple code; add variables/expressions to the Watch
// debug the same code in browser (snippet, or html page script)
const taxes = [100, 500, 900]; // add a breakpoint here
const totalTax = taxes.reduce(sum, 0);
console.log('Total tax: ', totalTax);

function sum(acc, item, index) {
  console.log(`... adding tax #${index + 1}`);
  acc = acc + item; // add a breakpoint here
  return acc;
}

let a = 7;
let b = 12;

// common way
let helper = a;
a = b;
b = helper;

// JavaScript specific
// [a, b] = [b, a];

console.log(a, b); // should print 12 7

/**
Numeric Literals
*/
//ES6:

var binary = [
  0b0,
  0b1,
  0b11
];
console.assert(binary === [0, 1, 3]);

var octal = [
  0o0,
  0o1,
  0o10,
  0o77
];
console.assert(octal === [0, 1, 8, 63]);
//ES5:

'use strict';

var binary = [0, 1, 3];
console.assert(binary === [0, 1, 3]);

var octal = [0, 1, 8, 63];
console.assert(octal === [0, 1, 8, 63]);
/**
* Rest Parameters
* Rest parameters allows your functions to have variable number of arguments without using the arguments object.
* The rest parameter is an instance of Array so all the array methods just work.
*/
//  ES6:

function f(x, ...y) {
  // y is an Array
  return x * y.length;
}

console.log(f(3, 'hello', true) === 6);
// -> true

//ES5:

'use strict';

function f(x) {
  var y = [];
  y.push.apply(y, arguments) && y.shift();

  // y is an Array
  return x * y.length;
}

console.log(f(3, 'hello', true) === 6);
// -> true
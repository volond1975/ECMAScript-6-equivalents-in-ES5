/**
* Spread Operator
* The spread operator is like the reverse of rest parameters.
* It allows you to expand an array into multiple formal parameters.

//ES6:

function add(a, b) {
  return a + b;
}

let nums = [5, 4];

console.log(add(...nums));
//ES5:

'use strict';

var _toArray = function (arr) {
  return Array.isArray(arr) ? arr : [].slice.call(arr);
};

function add(a, b) {
  return a + b;
}

var nums = [5, 4];
console.log(add.apply(null, _toArray(nums)));
//ES6:

function f(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
f(...[1,2,3]) === 6;
//ES5:

'use strict';

function f(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
f.apply(null, [1, 2, 3]) === 6;
*/
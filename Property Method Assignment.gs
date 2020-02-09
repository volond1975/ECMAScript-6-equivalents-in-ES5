/**
Property Method Assignment
Method syntax is supported in object initializers, for example see toString():
*/
//ES6:

var object = {
  value: 42,
  toString() {
    return this.value;
  }
};

console.log(object.toString() === 42);
// -> true
//ES5:

'use strict';

var object = {
  value: 42,
  toString: function toString() {
    return this.value;
  }
};

console.log(object.toString() === 42);
// -> true
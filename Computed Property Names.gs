/**
* Computed property names allow you to specify properties in object literals based on expressions:
*/
//ES6:

var prefix = 'foo';
var myObject = {
  [prefix + 'bar']: 'hello',
  [prefix + 'baz']: 'world'
};

console.log(myObject['foobar']);
// -> hello
console.log(myObject['foobaz']);
// -> world
//ES5:

'use strict';

var prefix = 'foo';
var myObject = {};

myObject[prefix + 'bar'] = 'hello';
myObject[prefix + 'baz'] = 'world';

console.log(myObject['foobar']);
// -> hello
console.log(myObject['foobaz']);
// -> world
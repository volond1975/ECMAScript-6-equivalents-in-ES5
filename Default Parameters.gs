/**
* Default Parameters
* Default parameters allow your functions to have optional arguments without needing to check arguments.length or check for undefined.
*/
//ES6:

function greet(msg='hello', name='world') {
  console.log(msg,name);
}

greet();
// -> hello world
greet('hey');
// -> hey world
//ES5:

'use strict';

function greet() {
  // unfair ... if you access arguments[0] like this you can simply
  // access the msg variable name instead
  var msg = arguments[0] === undefined ? 'hello' : arguments[0];
  var name = arguments[1] === undefined ? 'world' : arguments[1];
  console.log(msg, name);
}

function greet(msg, name) {
  (msg === undefined) && (msg = 'hello');
  (name === undefined) && (name = 'world');
  console.log(msg,name);
}

// using basic utility that check against undefined
function greet(msg, name) {
  console.log(
    defaults(msg, 'hello'),
    defaults(name, 'world')
  );
}

greet();
// -> hello world
greet('hey');
// -> hey world
//ES6:

function f(x, y=12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}

f(3) === 15;
//ES5:

'use strict';

function f(x, y) {
  if (y === undefined) {
    y = 12;
  }

  return x + y;
}

f(3) === 15;
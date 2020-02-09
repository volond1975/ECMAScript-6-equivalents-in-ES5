/**
* Block scoped bindings provide scopes other than the function and top level scope. This ensures your variables don't leak out of the scope they're defined:
* Привязки с блочной областью предоставляют области, отличные от функции и области верхнего уровня. Это гарантирует, что ваши переменные не вытекут из области их определения:
*/
//ES6:

// let declares a block scope local variable,
// optionally initializing it to a value in ES6
function exseplES6(){
'use strict';

var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // The scope is inside the if-block
  var b = 1; // The scope is inside the function

  console.log(a);  // 4
  console.log(b);  // 1
}

console.log(a); // 5
console.log(b); // 1
}
//ES5:
function exseplES5(){
'use strict';

var a = 5;
var b = 10;

if (a === 5) {
  // technically is more like the following
  (function () {
    var a = 4;
    b = 1;

    console.log(a); // 4
    console.log(b); // 1
  })();
}

console.log(a); // 5
console.log(b); // 1
}
//ES6:

// const creates a read-only named constant in ES6.
function exsepl1ES6(){
'use strict';
// define favorite as a constant and give it the value 7

const favorite = 7;
// Attempt to overwrite the constant
try {
  favorite = 15;
} catch (err) {
  console.log('my favorite number is still: ' + favorite);
  // will still print 7
}
}
//ES5:
function exsepl1ES5(){
'use strict';
// define favorite as a non-writable `constant` and give it the value 7
Object.defineProperties(window, {
  favorite: {
    value: 7,
    enumerable: true
  }
});
// ^ descriptors are by default false and const are enumerable
var favorite = 7;
// Attempt to overwrite the constant
favorite = 15;
// will still print 7
console.log('my favorite number is still: ' + favorite);
}
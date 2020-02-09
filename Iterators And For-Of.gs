/**
* Iterators And For-Of
* Iterators are objects that can traverse a container.
* It's a useful way to make a class work inside a for of loop.
* The interface is similar to the iterators-interface.
* Iterating with a for..of loop looks like:
*/

//ES6:

// Behind the scenes, this will get an iterator from the array and loop through it, getting values from it.
for (let element of [1, 2, 3]) {
  console.log(element);
}
// => 1 2 3
//ES6 (without using for-of, if Symbol is supported):

'use strict';

for (var _iterator = [1, 2, 3][Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
  var element = _step.value;
  console.log(element);
}

// => 1 2 3
E//S5 (approximates):

// Using forEach()
// Doesn't require declaring indexing and element variables in your containing
// scope. They get supplied as arguments to the iterator and are scoped to just
// that iteration.
var a = [1,2,3];
a.forEach(function (element) {
    console.log(element);
});

// => 1 2 3

// Using a for loop
var a = [1,2,3];
for (var i = 0; i < a.length; ++i) {
    console.log(a[i]);
}
// => 1 2 3
//Note the use of Symbol. The ES5 equivalent would require a Symbol polyfill in order to correctly function.
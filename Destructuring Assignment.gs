/** 
* Destructuring Assignment
* The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or
* objects using a syntax that mirrors the construction of array and object literals.
*/
//ES6:

var {foo, bar} = {foo: 'lorem', bar: 'ipsum'};
// foo => lorem and bar => ipsum
//ES5:

'use strict';

var _ref = { foo: 'lorem', bar: 'ipsum' };

// foo => lorem and bar => ipsum
var foo = _ref.foo;
var bar = _ref.bar;
//ES3:

with({foo: 'lorem', bar: 'ipsum'}) {
  // foo => lorem and bar => ipsum
}
//ES6:

var [a, , b] = [1,2,3];
//ES6 (shimming using Symbol.iterator):

'use strict';

var _slicedToArray = function (arr, i) {
  if (Array.isArray(arr)) {
    return arr;
  } else {
    var _arr = [];

    for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      _arr.push(_step.value);

      if (i && _arr.length === i) {
        break;
      }
    }

    return _arr;
  }
};

var _ref = [1, 2, 3];

var _ref2 = _slicedToArray(_ref, 3);

var a = _ref2[0];
var b = _ref2[2];
//ES5:

String.prototype.asNamedList = function () {
  return this.split(/\s*,\s*/).map(function (name, i) {
    return name ? ('var ' + name + '=slice(' + i + ', ' + (i + 1) + ')[0]') : '';
  }).join(';');
};

with([1,2,3]) {
  eval('a, , b'.asNamedList());
}
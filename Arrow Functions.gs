/**

Arrow Functions
An arrow function expression (also known as fat arrow function) has a shorter syntax compared to function expressions and lexically binds the this value. Arrow functions are always anonymous.
Выражение функции стрелки (также известное как толстая функция стрелки) имеет более короткий синтаксис по сравнению с выражениями функции и лексически связывает значение this. Функции стрелок всегда
*/
//ES6:

[1, 2, 3].map(n => n * 2);
// -> [ 2, 4, 6 ]
//ES5 equivalent:

[1, 2, 3].map(function(n) { return n * 2; }, this);
// -> [ 2, 4, 6 ]
//ES6:

var evens = [2, 4, 6, 8, 10];

// Expression bodies
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

console.log(odds);
// -> [3, 5, 7, 9, 11]

console.log(nums);
// -> [2, 5, 8, 11, 14]

// Statement bodies
var fives = [];
nums = [1, 2, 5, 15, 25, 32];
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

console.log(fives);
// -> [5, 15, 25]

// Lexical this
var bob = {
  _name: 'Bob',
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + ' knows ' + f));
  }
}

//ES5:

'use strict';

var evens = [2, 4, 6, 8, 10];

// Expression bodies
var odds = evens.map(function (v) {
  return v + 1;
}, this);
var nums = evens.map(function (v, i) {
  return v + i;
}, this);

console.log(odds);
// -> [3, 5, 7, 9, 11]

console.log(nums);
// -> [2, 5, 8, 11, 14]

var fives = [];
nums = [1, 2, 5, 15, 25, 32];

// Statement bodies
nums.forEach(function (v) {
  if (v % 5 === 0) {
    fives.push(v);
  }
}, this);

console.log(fives);
// -> [5, 15, 25]

// Lexical this
var bob = {
  _name: 'Bob',
  _friends: [],
  printFriends: function printFriends() {
    this._friends.forEach(function (f) {
      return console.log(this._name + ' knows ' + f);
    }, this);
  }
};
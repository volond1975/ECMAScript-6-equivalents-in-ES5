/**
* Array-like object to array
* Array.from converts a single argument that is an array-like object or list 
* (eg. arguments, NodeList, DOMTokenList (used by classList), 
* NamedNodeMap (used by attributes property) into a new Array() and returns it.
*/
// ES6:

var listFriends = function() {
  var friends = Array.from(arguments);
  friends.forEach(friend => {
    console.log(friend);
  });
};
listFriends('ann', 'bob');
// -> 'ann'
// -> 'bob'


var divs = document.querySelectorAll('div');
Array.from(divs).forEach(node => {
    console.log(node);
});
// -> <div>...</div>
// -> <div>...</div>
//ES5:

var listFriends = function() {
  var friends = [].slice.call(arguments)
  friends.forEach(function(friend) {
    console.log(friend);
  });
};
listFriends('ann', 'bob');
// -> 'ann'
// -> 'bob'


var divsArray = [].slice.call(document.querySelectorAll('div'));
divsArray.forEach(function(node) {
    console.log(node);
});
// -> <div>...</div>
// -> <div>...</div>
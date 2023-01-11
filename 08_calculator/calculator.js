const add = function(a, b) {
	return a+b
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(array) {
  return array.reduce((inter, i) => inter + i, 0)
};

const multiply = function(array) {
  return array.reduce((inter, i) => inter * i, 1)
};

const power = function(a, b) {
	return a**b
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

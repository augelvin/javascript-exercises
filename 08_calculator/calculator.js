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

const factorial = function(a) {
  const array = [];
  while (a > 0) {
    array.push(a);
    a -= 1;
  };

  return array.reduce((inter, i) => inter * i, 1)
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

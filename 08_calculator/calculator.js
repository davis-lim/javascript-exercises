const add = (a,b) => a + b;

const subtract = (a,b) => a-b;

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0)
};

const multiply = function(array){
  return array.reduce((num1, num2) => num1 * num2);
}

const power = (a,b) => a ** b;

const factorial = function(num) {
  if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i >= 1; i--){
    num *= i;
  } return num;
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

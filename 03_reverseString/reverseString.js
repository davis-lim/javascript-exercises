const reverseString = function(str) {
    let stringSplit = str.split('');
    let stringReverse = stringSplit.reverse();
    let joinString = stringReverse.join('');
    return joinString;
};

// Do not edit below this line
module.exports = reverseString;

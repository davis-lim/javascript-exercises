const palindromes = function (str) {
    var nonAlphabets = /[\W]/g; // [\W] matches any non-word character and matches anything that is not enclosed in the brackets, equivalent to [^A-Za-z0–9_]
    var strippedStr = str.toLowerCase().replace(nonAlphabets, '');
    var reverseStr = strippedStr.split('').reverse().join('');
    return reverseStr === strippedStr;
};

// Do not edit below this line
module.exports = palindromes;

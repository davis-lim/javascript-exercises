const sumAll = function(num1, num2) {
    let higherNumber = Math.max(num1, num2);
    let lowerNumber = Math.min(num1, num2);
    let finalSum = 0
    let error = "ERROR";
    if ((typeof num1 === "string") || (typeof num2 === "string")) {
        return error;
    } else if ((typeof num1 === "object") || (typeof num2 === "object")) {
        return error;
    } else if ((higherNumber >= 0) && (lowerNumber >= 0)) {
        for (let i = lowerNumber; i <= higherNumber; i++) {
            finalSum = finalSum + i;
        }
    } else return error;
    return finalSum;

};

// Do not edit below this line
module.exports = sumAll;

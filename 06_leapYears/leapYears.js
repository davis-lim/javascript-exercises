const leapYears = function(year) {
    let yearChoice = parseInt(year, 0);
    if ((yearChoice % 4 == 0) && ((yearChoice % 100 != 0) || (yearChoice % 400 == 0))) {
        return true;
    } else return false;

};

// Do not edit below this line
module.exports = leapYears;

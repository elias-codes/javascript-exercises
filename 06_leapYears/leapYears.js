const leapYears = function(year) {
    let fours = year % 4;
    let hundreds = year % 100;
    let fourHundreds = year % 400;
    let leap;
    if (fours == 0) {
        leap = true;
    }
    else {
        leap = false;
    }
    if (hundreds == 0) {
        leap =false;
    }
    if (fourHundreds == 0) {
        leap = true;
    }
    return leap;
    
};

// Do not edit below this line
module.exports = leapYears;

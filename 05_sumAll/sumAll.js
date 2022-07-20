const sumAll = function(limit1, limit2) {
    let sumResult = 0;
    if ( limit1 < 0 || limit2 < 0 || typeof limit1 !== 'number' || typeof limit2 !== 'number' ) {// filters negative and non number values
        return "ERROR"
    }
    if (limit1<=limit2) {
        for (i = limit1; i <= limit2; i++) {
            sumResult += i;
        }
    }
    else {
        for (i = limit2; i <= limit1; i++) {
            sumResult += i;
        }
    }

    return sumResult
};

// Do not edit below this line
module.exports = sumAll;

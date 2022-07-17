const repeatString = function(text,repeats) {
    if (repeats>=0) {
    let textRepeated = "";
    for (i=0; i<repeats; i++) {
        textRepeated+=text;
    }
    return textRepeated;
    }
    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;

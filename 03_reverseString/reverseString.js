const reverseString = function(originalString) {
    let convertedString = Array.from(originalString);//converts string to array
    let reversedString = convertedString.reverse();//reverses string
    reversedString = reversedString.join("");//joins array elements and converts it to string
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

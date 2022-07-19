const removeFromArray = function() {
    //let arguments = [[1,2,3], 2, 3];
    let valuesArr = arguments[0];
    let removingElements = [];
    removingElements = Array.from(arguments);
    removingElements.shift();
    /*for (i = 1 ; i < arguments.length ; i++) {
        removingElements[i-1] = arguments[i];
    }*/
    let result;
    result = valuesArr.filter(item => !removingElements.includes(item));
    console.log(valuesArr);
    console.log(removingElements);
    console.log(result);
    return result;
    
    
}; 

// Do not edit below this line
module.exports = removeFromArray;

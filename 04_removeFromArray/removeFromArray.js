const removeFromArray = function(array, ...args) {
    // filter in value if the value is not in the arguments
    return array.filter(val => !args.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;

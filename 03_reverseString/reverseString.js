const reverseString = function(string) {
    /* split each character of the string into an array */
    const chars = string.split('');

    /* reverse the order of the array */
    const reversedChars = [];
    for (char of chars) {
        reversedChars.unshift(char);
    }

    /* return reversed array as a string */
    return reversedChars.join('')

};

// Do not edit below this line
module.exports = reverseString;

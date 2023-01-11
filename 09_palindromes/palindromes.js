const palindromes = function (text) {
    const plain = text.toLowerCase().replace(/[.,?! ]/g,""); // remove punctuations and whitespaces
    const array = [...plain]; // spread
    const reversed = array.reverse().join(''); // reverse and join array
    return plain == reversed

};

// Do not edit below this line
module.exports = palindromes;

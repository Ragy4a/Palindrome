'use strict';

function getReversePalindrome (str) {
    const sep = '';
    const strWithoutGaps = str.toLowerCase().replaceAll(' ', sep);
    const reversedPalindrome = strWithoutGaps.split(sep).reverse().join(sep);
    if (typeof str !== 'string') {
        return 'Unknown information. Please, try again!'
    };
    if (strWithoutGaps === reversedPalindrome) {
        return `Yes, it is a palindrome! ${strWithoutGaps} = ${reversedPalindrome}`;
    }
    return 'It is not a palindrome!'
};

console.log(getReversePalindrome('Madam'));
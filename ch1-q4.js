"use strict";

/**
 * O(n)
 * @param {string} str 
 * @returns {boolean}
 */
function isPalindrome(str) {
    const loweredStr = str.toLowerCase();
    let chars = new Set();

    for (let char of loweredStr) {
        if (char === " ") continue;

        if (chars.has(char)) {
            chars.delete(char);
        } else {
            chars.add(char);
        }
    }

    return chars.size <= 1;
}

console.log( isPalindrome("Tact Coa") ); // true -> "taco cat" is a permutation
console.log( isPalindrome("race car") ); // true
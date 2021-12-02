"use strict";

/**
 * O(n)
 * @param {string} str 
 * @returns {boolean}
 */
function isPalindromePermutation(str) {
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

console.log( isPalindromePermutation("Tact Coa") ); // true -> "taco cat" is a permutation
console.log( isPalindromePermutation("race car") ); // true
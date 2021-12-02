"use strict";

/**
 * Case sensitive
 * 
 * Time: O(n)
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */
function isStrPermutation(str1, str2) {
    if (str1.length !== str2.length) return false; // Strings of diff lengths can't be permutations of each other

    const str1Sorted = str1
                        .split("")
                        .sort()
                        .join("");
    const str2Sorted = str2
                        .split("")
                        .sort()
                        .join("");

    return str1Sorted === str2Sorted;
}

console.log( isStrPermutation("dobby", "obbdy") ); // true
console.log( isStrPermutation("Happy", "Marsh") ); // false
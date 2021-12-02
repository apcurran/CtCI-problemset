"use strict";

/**
 * Time: O(n)
 * 
 * or Time: O(1) in a way,
 * since we can assume that the string will never be more than 128 characters long.
 * @param {string} str 
 * @returns {boolean}
 */
function isUnique(str) {
    if (str.length > 128) return false; // Can't form a unique string from more than a 128 character alphabet in UTF-8

    let charSet = new Set();

    for (let char of str) {
        if (charSet.has(char)) return false;

        charSet.add(char);
    }

    return true;
}

console.log( isUnique("bird") ); // true
console.log( isUnique("Harold") ); // true
console.log( isUnique("feline") ); // false
console.log( isUnique("doggo") ); // false
/*
    Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

    Examples:

    s = "leetcode"
    return 0.

    s = "loveleetcode",
    return 2.
    Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if (!s.length) return -1;
    for (let i = 0; i < s.length; i++) {
        const w = s[i];
        if (s.indexOf(w) === s.lastIndexOf(w)) return i;
    }
    return -1;
};

console.log(firstUniqChar('leetCode'));
console.log(firstUniqChar('cc'));
console.log(firstUniqChar('bd'));

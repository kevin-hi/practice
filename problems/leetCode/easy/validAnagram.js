/*
    Given two strings s and t , write a function to determine if t is an anagram of s.

    Example 1:

    Input: s = "anagram", t = "nagaram"
    Output: true
    Example 2:

    Input: s = "rat", t = "car"
    Output: false
    Note:
    You may assume the string contains only lowercase alphabets.

    Follow up:
    What if the inputs contain unicode characters? How would you adapt your solution to such case?
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagramSort = function(s, t) {
    if (s.split('').sort().join('') === t.split('').sort().join('')) return true;
    return false;
};


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagramCount = function(s, t) {
    if (s.length !== t.length) return false;
    const map = {};
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) map[s[i]] = 0;
        if (!map[t[i]]) map[t[i]] = 0;
        map[s[i]] += 1;
        map[t[i]] -= 1;
        if (map[s[i]] === 0) delete map[s[i]];
        if (map[t[i]] === 0) delete map[t[i]];
    }
    return Object.keys(map).length === 0;
};

// console.log(isAnagramCount('anagram', 'nagaram'));
console.log(isAnagramCount('aa', 'bb'));
console.log(isAnagramCount('rat', 'car'));



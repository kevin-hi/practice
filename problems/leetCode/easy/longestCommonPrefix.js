/*
    Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".

    Example 1:

    Input: ["flower","flow","flight"]
    Output: "fl"
    Example 2:

    Input: ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.
    Note:

    All given inputs are in lowercase letters a-z.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';
    if (strs.length === 1) return strs[0];
    let shortest = strs[0];
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < shortest.length) {
            shortest = strs[i];
        }
    }

    let prefix = '';
    for (let i = 0; i < shortest.length; i++) {
        prefix += shortest[i];
        for (let j = 0; j < strs.length; j++) {
            if (strs[j].indexOf(prefix) !== 0) {
                return prefix.substring(0, prefix.length - 1);
            }
        }

    }
    return shortest;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix([]));
console.log(longestCommonPrefix(["c","c"]));
console.log(longestCommonPrefix(["ca","a"]));
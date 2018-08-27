/*
    Given an array of strings, group anagrams together.

    Example:

    Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
    Output:
    [
      ["ate","eat","tea"],
      ["nat","tan"],
      ["bat"]
    ]
    Note:

    All inputs will be in lowercase.
    The order of your output does not matter.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const res = [];
    const order = {};

    for (let i = 0; i < strs.length; i++) {
        const sorted = strs[i].split('').sort().join('');
        if (order[sorted] === undefined) {
            order[sorted] = res.length;
            res.push([strs[i]]);
        } else {
            res[order[sorted]].push(strs[i]);
        }
    }

    return res;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
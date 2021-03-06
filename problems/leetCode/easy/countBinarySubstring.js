/*
    Give a string s, count the number of non-empty (contiguous) substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

    Substrings that occur multiple times are counted the number of times they occur.

    Example 1:
    Input: "00110011"
    Output: 6
    Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".

    Notice that some of these substrings repeat and are counted the number of times they occur.

    Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.
    Example 2:
    Input: "10101"
    Output: 4
    Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.
    Note:

    s.length will be between 1 and 50,000.
    s will only consist of "0" or "1" characters.
 */

/**
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = function(s) {

    const groups = [1];

    //Generate groups of 1s and 0s, e.g.: "110001111000000" => [2, 3, 4, 6]
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] !== s[i]) groups.push(1);
        else groups[groups.length - 1]++;
    }

    let ans = 0;

    //Based on the groups take the smallest, as the binary has to change towards the end
    //The longest substring is the smallest of the two
    for (let i = 1; i < groups.length; i++) {
        ans += Math.min(groups[i - 1], groups[i]);
    }

    return ans;
};

// console.log(countBinarySubstrings("00110011"));
console.log(countBinarySubstrings("11110011"));
// console.log(countBinarySubstrings("10101"));
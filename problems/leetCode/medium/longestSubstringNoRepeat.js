/*
    Given a string, find the length of the longest substring without repeating characters.

    Examples:

    Given "abcabcbb", the answer is "abc", which the length is 3.

    Given "bbbbb", the answer is "b", with the length of 1.

    Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//         if (s.length === 1) return 1;
//     let candidate = '';
//     let final = '';
//
//     for (let i = 0; i < s.length; i++) {
//
//         if (candidate.indexOf(s[i]) > -1) {
//             if (candidate.length > final.length) final = candidate;
//             candidate = '';
//             for (let j = i - 1; j >= 0; j--) {
//                 if (s[j] === s[i]) {
//                     i = j;
//                     break;
//                 }
//             }
//         } else {
//             candidate += s[i];
//         }
//         if (i === s.length - 1 && candidate.length > final.length) final = candidate;
//     }
//
//     return final.length;
//
// };

var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let result = 0;
    let temp = '';
    for (let i = 0; i < s.length; i ++) {
        //Index of the current substring, where current letter occurs
        let index = temp.indexOf(s[i]);
        //If index is count, the new start is the first occurrence of i letter adding to previous start
        if (index !== -1) start += index + 1;
        //Set temporary equal to start and current adding 1
        temp = s.substring(start, i + 1);
        //Setting result between the running max and current temp
        result = Math.max(result, temp.length);
    }
    return result;
};

// console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('au'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('dvdf'));
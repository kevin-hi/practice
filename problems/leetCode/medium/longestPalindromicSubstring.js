/*
    Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

    Example 1:

    Input: "babad"
    Output: "bab"
    Note: "aba" is also a valid answer.
    Example 2:

    Input: "cbbd"
    Output: "bb"
 */

/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function(s) {
//
//     if (s.length === 1) return s;
//     let res = '';
//
//     for (let i = 0; i < s.length; i++) {
//         const repeat = s[i - 1] === s[i];
//         let temp = s[i];
//
//         let j = i;
//         let k = i;
//
//         if (repeat) {
//             while (s[--j] === s[i]) temp = s[j] + temp;
//             while (s[++k] === s[i]) temp += s[k];
//         } else {
//             j--;
//             k++;
//         }
//
//         while (s[j] === s[k] && j >= 0 && k < s.length) temp = `${s[j--]}${temp}${s[k++]}`;
//         if (temp.length > res.length) res = temp;
//     }
//     return res;
// };

var longestPalindrome = function(s) {
    if (s.length === 1) return s;
    let left = 0, right = 0;
    let slow = 0, fast = 0;

    for (let i = 0; i < s.length; i++) {
        fast = i;
        slow = i;

        while (fast + 1 < s.length && s[fast] === s[fast + 1]) {
            fast++;
            i++;
        }

        while (fast + 1 < s.length && slow > 0 && s[slow - 1] === s[fast + 1]) {
            slow--;
            fast++;
        }

        if (fast - slow > right - left) {
            right = fast;
            left = slow;
        }
    }

    return s.substring(left, right + 1);
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('abcda'));
console.log(longestPalindrome('bb'));
console.log(longestPalindrome('abowbobdz'));
console.log(longestPalindrome('abowbbbobdz'));
console.log(longestPalindrome('abowbzbbbzbobdz'));
console.log(longestPalindrome('zbbbz'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('ccc'));
console.log(longestPalindrome('aaaa'));
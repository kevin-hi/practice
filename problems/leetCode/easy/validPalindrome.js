/*
    Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

    Note: For the purpose of this problem, we define empty string as valid palindrome.

    Example 1:

    Input: "A man, a plan, a canal: Panama"
    Output: true
    Example 2:

    Input: "race a car"
    Output: false
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/\W/g, '');
    const split = s.split('');
    const first = split.slice(0, s.length/2).join('') ;
    const second = split.slice(s.length%2 === 0 ? s.length/2 : s.length/2 + 1).reverse().join('');
    return first === second;
};

/**
 * O(N), two pointers, one forward one backwards, if mismatch return false
 * @param s
 * @returns {boolean}
 */
var isPalindromeCount = function(s) {
   s = s.toLowerCase().replace(/\W/g, '');
   const length = s.length;
   for (let i = 0, j = length - 1; i < length; i++, j--) {
       if (s[i] !== s[j]) return false;
   }
   return true;
};

// console.log(isPalindrome('A man, a plan, a canal: Panama'));
// console.log(isPalindrome('race a car'));
// console.log(isPalindrome('aa'));

console.log(isPalindromeCount('A man, a plan, a canal: Panama'));
console.log(isPalindromeCount('race a car'));
console.log(isPalindromeCount('aa'));
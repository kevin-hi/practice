/*
    Given a string, your task is to count how many palindromic substrings in this string.

    The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

    Example 1:
    Input: "abc"
    Output: 3
    Explanation: Three palindromic strings: "a", "b", "c".
    Example 2:
    Input: "aaa"
    Output: 6
    Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
    Note:
    The input string length won't exceed 1000.
 */

/**
 * @param {string} s
 * @return {number}
 */
const countSubstringsBruteForce = function(s) {

    const mem = {};
    const isPalindrome = str => {
        if (mem[str] === true) return true;
        const res = str.split('').reverse().join('') === str;
        mem[str] = res;
        return res;
    };

    let counter = 0;

    for (let i = 0; i < s.length; i++) {
        let subString = '';
        for (let j = i; j < s.length; j++) {
            subString += s.charAt(j);
            if(isPalindrome(subString)) counter++;
        }
    }

    return counter;

};

const countSubstrings = s => {
    let res = 0;
    function count(left, right){
        while(left > -1 && right < s.length && s[left] === s[right]){
            res++;
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++){
        count(i , i);
        count(i, i + 1);
    }
    return res;
};



console.log(countSubstrings('abc'));


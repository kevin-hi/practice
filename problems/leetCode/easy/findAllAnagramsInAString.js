/*
    Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

    Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

    The order of output does not matter.

    Example 1:

    Input:
    s: "cbaebabacd" p: "abc"

    Output:
    [0, 6]

    Explanation:
    The substring with start index = 0 is "cba", which is an anagram of "abc".
    The substring with start index = 6 is "bac", which is an anagram of "abc".
    Example 2:

    Input:
    s: "abab" p: "ab"

    Output:
    [0, 1, 2]

    Explanation:
    The substring with start index = 0 is "ab", which is an anagram of "ab".
    The substring with start index = 1 is "ba", which is an anagram of "ab".
    The substring with start index = 2 is "ab", which is an anagram of "ab".

 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function(s, p) {
    const mem = {};
    const res = [];
    for (let i = 0; i < p.length; i++) mem[p[i]] = mem[p[i]] ? mem[p[i]] + 1 : 1;
    //two points, initialize count to p's length
    let left = 0, right = 0, count = p.length;

    while (right < s.length) {
        //move right every time, if the character exists in p's hash, decrease the count
        //current hash value >= 1 means the character is existing in p
        if (mem[s[right++]]-- >= 1) count--;

        //when the count is down to 0, means we found the right anagram
        if (count === 0) res.push(left);

        if (right - left === p.length && mem[s[left++]]++ >= 0) count++;
    }
    return res;

};

//console.log(findAnagrams('cbaebabacd', 'abc'));
console.log(findAnagrams('abab', 'ab'));
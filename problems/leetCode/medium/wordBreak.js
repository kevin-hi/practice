/*
    Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

    Note:

    The same word in the dictionary may be reused multiple times in the segmentation.
    You may assume the dictionary does not contain duplicate words.
    Example 1:

    Input: s = "leetcode", wordDict = ["leet", "code"]
    Output: true
    Explanation: Return true because "leetcode" can be segmented as "leet code".
    Example 2:

    Input: s = "applepenapple", wordDict = ["apple", "pen"]
    Output: true
    Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
                 Note that you are allowed to reuse a dictionary word.
    Example 3:

    Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
    Output: false

 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function(s, wordDict) {
    const dict = {};
    for (let k = 0; k < wordDict.length; k++) dict[wordDict[k]] = true;
    //Instantiate 0 place to be true, as no word is necessary to form empty string
    const mem = [true];

    //Go through all elements from i to the end and check for all iterations of
    //0 to i (j is maxed at i - 1 because we want to check at least 1 char length)
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            //Check if all 0 to i cam be formed by words in dictionary via following conditions
            //1. If back part mem[j] can be formed by words in the dictionary
            //2. If front part mem[(j to i)] is in dictionary
            if (mem[j] === true && dict[s.substring(i, j)] === true) {
                //Set current i to be true, as it could be formed by words in the dictionary
                mem[i] = true;
                //Break out if this is true by any variation
                break;
            }
        }
    }

    return mem[s.length] === true;
};

console.log(wordBreak('leetcode', ['leet', 'code']));
console.log(wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]));
// console.log(wordBreak('a', ["a"]));
// console.log(wordBreak('aaaaaaa', ['aaaa', 'aaa']));
//console.log(wordBreak('cars', ["car","ca","rs"]));
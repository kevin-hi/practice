/*
    Given a string s, partition s such that every substring of the partition is a palindrome.

    Return all possible palindrome partitioning of s.

    Example:

    Input: "aab"
    Output:
    [
      ["aa","b"],
      ["a","a","b"]
    ]
 */

/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = function(s) {
    const res = [];
    const stack = [];

    function backtrack(index) {
        //If current index is the last element and we have any item in the stack push results
        if (stack.length > 0 && index === s.length) res.push(stack.slice());
        //Go through
        for (let i = index; i < s.length; i++) {
            if (isPalindrome(index, i)) {
                //This palindrome is either a single letter or a range
                const candidate = index === i ? s[i] : s.substring(index, i + 1);
                stack.push(candidate);

                backtrack(i + 1);

                stack.pop();
            }
        }
    }

    function isPalindrome(index, i) {
        if (index === i) return true;
        while (index < i) {
            if (s[index] !== s[i]) return false;
            i--;
            index++;
        }
        return true;
    }

    backtrack(0);

    return res;
};

console.log(partition('aab'));
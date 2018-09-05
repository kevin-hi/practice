/*
    Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

    For example, given n = 3, a solution set is:

    [
      "((()))",
      "(()())",
      "(())()",
      "()(())",
      "()()()"
    ]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
    let res = [];

    function traverse(current, open, close) {
        if (current.length === n * 2) return res.push(current);
        if (open < n) traverse(current + '(', open + 1, close);
        if (close < open) traverse(current + ')', open, close + 1);
    }

    traverse('', 0, 0);

    return res;
};

console.log(generateParenthesis(3));
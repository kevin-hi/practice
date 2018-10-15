/*
    Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

    Examples:
    Input: S = "a1b2"
    Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

    Input: S = "3z4"
    Output: ["3z4", "3Z4"]

    Input: S = "12345"
    Output: ["12345"]
    Note:

    S will be a string with length at most 12.
    S will consist only of letters or digits.
 */

/**
 * @param {string} S
 * @return {string[]}
 */
const letterCasePermutation = function(S) {
    const res = [];
    bfs('', 0);

    function bfs (current, index) {
        if (index === S.length) return res.push(current);
        const ch = S[index];

        if (isNaN(ch)) {
            bfs(current + ch.toLowerCase(), index + 1);
            bfs(current + ch.toUpperCase(), index + 1);
        } else {
            bfs(current + ch, index + 1);
        }
    }

    return res;
};

console.log(letterCasePermutation('a1b2'));
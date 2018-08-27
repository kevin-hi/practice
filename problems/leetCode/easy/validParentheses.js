/*
    Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Note that an empty string is also considered valid.

    Example 1:

    Input: "()"
    Output: true
    Example 2:

    Input: "()[]{}"
    Output: true
    Example 3:

    Input: "(]"
    Output: false
    Example 4:

    Input: "([)]"
    Output: false
    Example 5:

    Input: "{[]}"
    Output: true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        "(": ")",
        "[": "]",
        "{": "}"
    };

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const item = s[i];

        //if its a starting bracket
        if (map[item]) {
            //push to stack
            stack.push(map[item]);
        } else {
            //if its not a starting bracket it has to be an ending one
            //if ending does not equal the matched result return false
            if (item !== stack.pop()) return false;
        }
    }

    return stack.length === 0;
};

console.log(isValid("{[]}"));

console.log(isValid("["));
// console.log(isValid('()[]{}'));

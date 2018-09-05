/*
    Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

    A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



    Example:

    Input: "23"
    Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
    Note:

    Although the above answer is in lexicographical order, your answer could be in any order you want.
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
    const map = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const res = [];

    //Prefix stack
    const prefix = [];

    //Starting with first index of the digit
    if (digits.length) traverse(0);

    return res;

    function traverse(index) {
        if (index === digits.length) return res.push(prefix.join(''));

        //Convert string input into digits for the first index
        const str = map[parseInt(digits[index])];

        //Loop through all possible choices of the digit for the particular index
        for (let i = 0; i < str.length; i++) {
            //Lets push first possibilities
            prefix.push(str[i]);
            //Recursively calling the next index
            traverse(index + 1);
            //Removing this possibility after completing
            prefix.pop();
        }
    }

};




console.log(letterCombinations('23'));
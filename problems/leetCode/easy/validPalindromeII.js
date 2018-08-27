/*
    Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

    Example 1:
        Input: "aba"
        Output: True
    Example 2:
        Input: "abca"
        Output: True
    Explanation: You could delete the character 'c'.
    Note:
        The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
 */

/**
 * General plan:
 * 1. Start from start and end
 * 2. At first instance of difference
 * 3. Skip both sides and see if the remaining is a palindrome
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = s => {

    if (s.length < 3) return true;

    for (let i = 0, j = s.length - 1; i < j; i++, j--) {

        //Start from front and back until first pair that is different
        if (s[i] !== s[j]) {
            //Set pointers for skipping from left side and right side
            let i1 = i;
            let j1 = j - 1;
            let i2 = i + 1;
            let j2 = j;

            //Iterate through both scenarios until they do not equal
            while (i1 < j1 && s[i1] === s[j1]) {i1++; j1--;}
            while (i2 < j2 && s[i2] === s[j2]) {i2++; j2--;}

            //Return if one of the scenarios above reached termination point and thus produced a palindrome
            return i1 >= j1 || i2 >= j2;
        }
    }
    return true;

};

console.log(validPalindrome("atbbga"));
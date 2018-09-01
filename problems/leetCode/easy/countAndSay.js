/*

    The count-and-say sequence is the sequence of integers with the first five terms as following:

    1.     1
    2.     11
    3.     21
    4.     1211
    5.     111221
    1 is read off as "one 1" or 11.
    11 is read off as "two 1s" or 21.
    21 is read off as "one 2, then one 1" or 1211.
    Given an integer n, generate the nth term of the count-and-say sequence.

    Note: Each term of the sequence of integers will be represented as a string.

    Example 1:

    Input: 1
    Output: "1"
    Example 2:

    Input: 4
    Output: "1211"

 */

/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) {

    let count = 1;

    function parse(m) {
        const arr = m.split('');
        let res = '';

        let counter = 1;
        let current = arr[0];

        for (let i = 1; i <= arr.length; i++) {
            if (arr[i] !== current) {
                res += counter;
                res += current;
                current = arr[i];
                counter = 1;
            } else counter++;
        }

        count++;
        if (count === n) return res;
        return parse(res);
    }

    return parse('1');
};

console.log(countAndSay(5));
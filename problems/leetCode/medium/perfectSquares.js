/*
    Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

    Example 1:

    Input: n = 12
    Output: 3
    Explanation: 12 = 4 + 4 + 4.
    Example 2:

    Input: n = 13
    Output: 2
    Explanation: 13 = 4 + 9.

 */

/**
 * @param {number} n
 * @return {number}
 */
const numSquares = n => {

    const squares = [];
    //No remainder equals to perfect squares
    const isPerfectSquare = num => Math.sqrt(num) % 1 === 0;

    //Find all the perfect squares
    for (let i = 1; i <= n; i++) if (isPerfectSquare(i)) squares.push(i);

    console.log(squares);

    //Construct memoization array, be sure to +1 to account for 0
    const mem = new Array(n + 1).fill(Infinity);

    //You can't have any perfect squares for 0
    mem[0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < squares.length; j++) {
            //If the square is less than current value
            //Set current to be the smallest of current memoized value or memoized value of current value minus square value adding 1
            if (squares[j] <= i) mem[i] = Math.min(mem[i], mem[i - squares[j]] + 1);
        }
    }

    console.log(mem);

    return mem[mem.length - 1];
};

console.log(numSquares(13));
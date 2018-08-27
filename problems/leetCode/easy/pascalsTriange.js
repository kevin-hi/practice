/*
    Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

    In Pascal's triangle, each number is the sum of the two numbers directly above it.

    Example:

    Input: 5
    Output:
    [
         [1],
        [1,1],
       [1,2,1],
      [1,3,3,1],
     [1,4,6,4,1]
    ]
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const pasc = [];
    for (let i = 0; i < numRows; i++) {
        const current = [];
        for (let j = 0; j <= i; j++) {
            const content = i !== 0 ? (pasc[i - 1][j - 1] || 0) + (pasc[i - 1][j] || 0) : 1;
            current.push(content);
        }
        pasc.push(current);
    }
    return pasc;
};

console.log(generate(5));
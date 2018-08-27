/*
    Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

    Example 1:

    Input:
    [
      [1,1,1],
      [1,0,1],
      [1,1,1]
    ]
    Output:
    [
      [1,0,1],
      [0,0,0],
      [1,0,1]
    ]
    Example 2:

    Input:
    [
      [0,1,2,0],
      [3,4,5,2],
      [1,3,1,5]
    ]
    Output:
    [
      [0,0,0,0],
      [0,4,5,0],
      [0,3,1,0]
    ]
    Follow up:

    A straight forward solution using O(mn) space is probably a bad idea.
    A simple improvement uses O(m + n) space, but still not the best solution.
    Could you devise a constant space solution?
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

    let x = [];
    let y = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][j] = 1;
                x.push(i);
                y.push(j);
            }
        }
    }

    //Setting all rows to 0
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < matrix[x[i]].length; j++) {
            matrix[x[i]][j] = 0;
        }
    }

    //Setting all columns to 0
    for (let i = 0; i < y.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            matrix[j][y[i]] = 0;
        }
    }

};

// const input = [
//     [1,1,1],
//     [1,0,1],
//     [1,1,1]
// ];

const input = [
    [0,1,2,0],[3,4,5,2],[1,3,1,5]
];

setZeroes(input)

console.log(input);
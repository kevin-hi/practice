/*
    Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

    Integers in each row are sorted from left to right.
    The first integer of each row is greater than the last integer of the previous row.
    Example 1:

    Input:
    matrix = [
      [1,   3,  5,  7],
      [10, 11, 16, 20],
      [23, 30, 34, 50]
    ]
    target = 3
    Output: true
    Example 2:

    Input:
    matrix = [
      [1,   3,  5,  7],
      [10, 11, 16, 20],
      [23, 30, 34, 50]
    ]
    target = 13
    Output: false
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        const nextRowStarting = matrix[i + 1] && matrix[i + 1][0];
        console.log(i);
        if (target >= matrix[i][0] && (typeof nextRowStarting === 'number' ? target < nextRowStarting : true)) {
            return matrix[i].indexOf(target) > -1;
        }
    }
    return false;
};

// console.log(searchMatrix(
//     [
//         [1,   3,  5,  7],
//         [10, 11, 16, 20],
//         [23, 30, 34, 50]
//     ], 3));

console.log(searchMatrix(
    [
        [-10,-8,-6,-4,-3],[0,2,3,4,5],[8,9,10,10,12]
    ], 0));
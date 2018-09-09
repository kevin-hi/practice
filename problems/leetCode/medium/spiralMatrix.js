/*
    Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

    Example 1:

    Input:
    [
     [ 1, 2, 3 ],
     [ 4, 5, 6 ],
     [ 7, 8, 9 ]
    ]
    Output: [1,2,3,6,9,8,7,4,5]
    Example 2:

    Input:
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9,10,11,12]
    ]
    Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function(matrix) {
    const res = [];
    function traverse(direction, x, y) {
        if (!matrix[x] || matrix[x][y] === null || matrix[x][y] === undefined) return;
        res.push(matrix[x][y]);
        matrix[x][y] = null;

        //RIGHT
        if (direction === 'RIGHT') {
            if (y + 1 < matrix[0].length && matrix[x][y + 1] !== null) traverse('RIGHT', x, y + 1);
            else traverse('DOWN', x + 1, y)
        }

        //Down
        if (direction === 'DOWN') {
            if (x + 1 < matrix.length && matrix[x + 1][y] !== null) traverse('DOWN', x + 1, y);
            else traverse('LEFT', x, y - 1)
        }

        //Left
        if (direction === 'LEFT') {
            if (y - 1 >= 0 && matrix[x][y - 1] !== null) traverse('LEFT', x, y - 1);
            else traverse('UP', x - 1, y)
        }
        //Up
        if (direction === 'UP') {
            if (x - 1 >= 0 && matrix[x - 1][y] !== null) traverse('UP', x - 1, y);
            else traverse('RIGHT', x, y + 1);
        }
    }

    traverse('RIGHT', 0, 0);

    return res;
};

// console.log(spiralOrder([
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ]
// ]));

// console.log(spiralOrder([
//     [2,5],
//     [8,4],
//     [0,-1]
// ]));

console.log(spiralOrder([
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]));


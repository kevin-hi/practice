/*

    Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

    Note: You can only move either down or right at any point in time.

    Example:

    Input:
    [
      [1,3,1],
      [1,5,1],
      [4,2,1]
    ]
    Output: 7
    Explanation: Because the path 1→3→1→1→1 minimizes the sum.

 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function(grid) {
    if (!grid || !grid.length) return 0;

    const mem = [];
    for (let i = 0; i < grid.length; i++) {
        if (grid[i] !== undefined) mem.push([]);
        for (let j = 0; j < grid[i].length; j++) {
            if (i === 0 && j > 0) mem[i].push(grid[i][j] + mem[i][j - 1]);
            else if (i > 0 && j === 0) mem[i].push(grid[i][j] + mem[i - 1][j]);
            else mem[i].push(grid[i][j]);
        }
    }

    for (let i = 1; i < mem.length; i++) {
        for (let j = 1; j < mem[i].length; j++) {
            mem[i][j] = Math.min(mem[i - 1][j], mem[i][j - 1]) + grid[i][j];
        }
    }

    return mem[grid.length - 1][grid[grid.length - 1].length - 1];
};

console.log(minPathSum([
    [1,3,1],
    [1,5,1],
    [4,2,1]
]));
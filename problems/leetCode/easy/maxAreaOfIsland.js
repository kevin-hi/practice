/*
    Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

    Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

    Example 1:
    [[0,0,1,0,0,0,0,1,0,0,0,0,0],
     [0,0,0,0,0,0,0,1,1,1,0,0,0],
     [0,1,1,0,1,0,0,0,0,0,0,0,0],
     [0,1,0,0,1,1,0,0,1,0,1,0,0],
     [0,1,0,0,1,1,0,0,1,1,1,0,0],
     [0,0,0,0,0,0,0,0,0,0,1,0,0],
     [0,0,0,0,0,0,0,1,1,1,0,0,0],
     [0,0,0,0,0,0,0,1,1,0,0,0,0]]
    Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
    Example 2:
    [[0,0,0,0,0,0,0,0]]
    Given the above grid, return 0.
    Note: The length of each dimension in the given grid does not exceed 50.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function(grid) {

    let largestIsland = 0;
    const store = {};

    function probe(x, y, marker) {
        if (grid[x][y] === 0) return;
        grid[x][y] = 0;

        if (store[marker] === undefined){
            store[marker] = 1;
        } else {
            store[marker]++;
        }

        const UP = grid[x - 1] && grid[x - 1][y];
        const DOWN = grid[x + 1] && grid[x + 1][y];
        const LEFT = grid[x][y - 1];
        const RIGHT = grid[x][y + 1];

        if (UP === 1) {
            probe(x - 1, y, marker);
        }
        if (DOWN === 1) {
            probe(x + 1, y, marker);
        }
        if (LEFT === 1) {
            probe(x, y - 1, marker);
        }
        if (RIGHT === 1) {
            probe(x, y + 1, marker);
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                probe(i, j, `${i}${j}`);
            }
        }
    }

    console.log(store);

    for (let i in store) {
        if (store[i] > largestIsland) largestIsland = store[i];
    }

    return largestIsland;
};

const land1 = [
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]];

const land2 = [[0,0,0,0,0,0,0,0]];
const land3 = [
    [1,1,0,0,0],
    [1,1,0,0,0],
    [0,0,0,1,1],
    [0,0,0,1,1]
];

const land4 = [
    [1,1,0,1,1],
    [1,0,0,0,0],
    [0,0,0,0,1],
    [1,1,0,1,1]
];

console.log(maxAreaOfIsland(land3));
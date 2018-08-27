/*
    You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.
    Grid cells are connected horizontally/vertically (not diagonally).
    The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
    The island doesn't have "lakes" (water inside that isn't connected to the water around the island).
    One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100.
    Determine the perimeter of the island.

    Example:

    [[0,1,0,0],
     [1,1,1,0],
     [0,1,0,0],
     [1,1,0,0]]

    Answer: 16
    Explanation: The perimeter is the 16 yellow stripes in the image below:

 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = grid => {

    let count = 0;
    const LAND = 1;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === LAND) {
                count += tryPaths(i, j);
            }
        }
    }

    function tryPaths(x, y) {
        let total = 0;
        const BACK = grid[x][y - 1];
        const FORWARD = grid[x][y + 1];
        const UP = grid[x + 1] && grid[x + 1][y];
        const DOWN = grid[x - 1] &&  grid[x - 1][y];

        if (!BACK) total++;
        if (!FORWARD) total++;
        if (!UP) total++;
        if (!DOWN)  total++;
        return total;
    }

    return count;
};

console.log(
    islandPerimeter(
        [[0,1,0,0],
            [1,1,1,0],
            [0,1,0,0],
            [1,1,0,0]]
    )
);


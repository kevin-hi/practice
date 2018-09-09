/*

    According to the Wikipedia's https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
    article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

    Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

    Any live cell with fewer than two live neighbors dies, as if caused by under-population.
        Any live cell with two or three live neighbors lives on to the next generation.
        Any live cell with more than three live neighbors dies, as if by over-population..
        Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
        Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

        Example:

    Input:
        [
            [0,1,0],
            [0,0,1],
            [1,1,1],
            [0,0,0]
        ]
    Output:
        [
            [0,0,0],
            [1,0,1],
            [0,1,1],
            [0,1,0]
        ]
    Follow up:

        Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
        In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?

*/


/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = function(board) {
    const LIVE = 1;
    const DEAD = 0;

    const ref = [];

    for (let i = 0; i < board.length; i++) {
        ref.push([]);
        for (let j = 0; j < board[i].length; j++) ref[i].push(board[i][j]);
    }

    function getLiveNeighbors(x, y) {
        let live = 0;
        const TOP_LEFT = ref[x - 1] && ref[x - 1][y - 1];
        const TOP = ref[x - 1] && ref[x - 1][y];
        const TOP_RIGHT = ref[x - 1] && ref[x - 1][y + 1];
        const LEFT = ref[x][y - 1];
        const RIGHT = ref[x][y + 1];
        const BOTTOM_LEFT = ref[x + 1] && ref[x + 1][y - 1];
        const BOTTOM = ref[x + 1] && ref[x + 1][y];
        const BOTTOM_RIGHT = ref[x + 1] && ref[x + 1][y + 1];

        if (TOP === LIVE) live++;
        if (TOP_LEFT === LIVE) live++;
        if (TOP_RIGHT === LIVE) live++;
        if (LEFT === LIVE) live++;
        if (RIGHT === LIVE) live++;
        if (BOTTOM_LEFT === LIVE) live++;
        if (BOTTOM === LIVE) live++;
        if (BOTTOM_RIGHT === LIVE) live++;
        return live;
    }

    for (let i = 0; i < ref.length; i++) {
        for (let j = 0; j < ref[i].length; j++) {
            const res = getLiveNeighbors(i, j);
            if (ref[i][j] === LIVE) {
                if (res < 2) board[i][j] = DEAD;
                else if (res === 2 || res === 3) board[i][j] = LIVE;
                else if (res > 3) board[i][j] = DEAD;
            } else if (ref[i][j] === DEAD) {
                if (res === 3) board[i][j] = LIVE;
            }
        }
    }

};

console.log(gameOfLife([
    [0,1,0],
    [0,0,1],
    [1,1,1],
    [0,0,0]
]));


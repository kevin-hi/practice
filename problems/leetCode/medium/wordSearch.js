/*
    Given a 2D board and a word, find if the word exists in the grid.

    The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

    Example:

    board =
    [
      ['A','B','C','E'],
      ['S','F','C','S'],
      ['A','D','E','E']
    ]

    Given word = "ABCCED", return true.
    Given word = "SEE", return true.
    Given word = "ABCB", return false.
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const exist = function(board, word) {
    function search(x, y, index) {
        // if (!board[x] || !board[x][y]) return false;
        if (x < 0 || x >= board.length) return false;
        if (y < 0 || y >= board[0].length) return false;
        console.log(`${x} ${y} ${index} ${board[x][y]} ${word[index]}`);
        if (board[x][y] !== word[index]) return false;
        if (index === word.length - 1) return true;

        const xMoves = [0, 0, -1, +1];
        const yMoves = [-1, +1, 0, 0];

        for (let i = 0; i < 4; i++) {
            let temp = board[x][y];
            board[x][y] = true;
            if (search(x + xMoves[i], y + yMoves[i], index + 1)) return true;
            board[x][y] = temp;
        }

        return false;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === word[0] && search(i, j, 0)) return true;
        }
    }


    return false;
};

console.log(exist(
    [
        ["A","B","C","E"],
        ["S","F","C","S"],
        ["A","D","E","E"]
    ], 'ABCCED'));

// console.log(exist(
//     [
//         ["a","a"]
//     ], 'aaa'));

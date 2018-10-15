/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const updateMatrix = matrix => {

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[i][j] = dfs(i, j, matrix);
        }
    }
    return matrix;
};

const dfs = (i, j, matrix) => {
    if (matrix[i][j] === 0) return 0;

    //Each item in queue marks positions to DFS
    const queue = [[i, j]];

    while(queue.length > 0) {
        const pos = queue.shift();
        const x = pos[0];
        const y = pos[1];

        //up
        if (x > 0) {
            if (matrix[x-1][y] === 0) return Math.abs(x-1-i) + Math.abs(y-j);
            else queue.push([x-1, y]);
        }
        //right
        if (y < matrix[0].length - 1) {
            if (matrix[x][y+1] === 0) return Math.abs(x-i) + Math.abs(y+1-j);
            else queue.push([x, y+1]);
        }
        //down
        if (x < matrix.length - 1) {
            if (matrix[x+1][y] === 0) return Math.abs(x+1-i) + Math.abs(y-j);
            else queue.push([x+1, y]);
        }
        //left
        if (y > 0) {
            if (matrix[x][y-1] === 0) return Math.abs(x-i) + Math.abs(y-1-j);
            else queue.push([x, y-1]);
        }
    }
};
console.log(updateMatrix([[0,0,0],[0,1,0],[1,1,1]]));
/*
    Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

    Example:

    Input: 3
    Output: 5
    Explanation:
    Given n = 3, there are a total of 5 unique BST's:

       1         3     3      2      1
        \       /     /      / \      \
         3     2     1      1   3      2
        /     /       \                 \
       2     1         2                 3

 */

/**
 * @param {number} n
 * @return {number}
 */
const numTreeTwo = function(n) {

    const mem = {};

    function find(count) {
        //Base cases, if count is 0 or 1, there is 1 unique tree
        if (count === 0 || count === 1) return 1;
        if (mem[count] !== undefined) return mem[count];
        let res = 0;

        for (let i = 1; i <= count; i++) {
            //Cartesian sum of left tree and right tree
            res += find(i - 1) * find(count - i);
        }
        mem[count] = res;
        return res;
    }

    return find(n);

};

const numTrees = function(n) {
    if (n === 0 || n === 1) return 1;

    const mem = new Array(n + 1).fill(0);
    mem[0] = 1;
    mem[1] = 1;

    for (let i = 2; i <= n; ++i) {
        for (let j = 1; j <= i; ++j) {
            mem[i] += mem[j - 1] * mem[i - j];
        }
    }

    return mem[n];

};


console.log(numTreeTwo(3));

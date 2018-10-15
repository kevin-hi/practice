/*
 There is a fence with n posts, each post can be painted with one of the k colors.

 You have to paint all the posts such that no more than two adjacent fence posts have the same color.

 Return the total number of ways you can paint the fence.

 Note:
 n and k are non-negative integers.

 Example:

 Input: n = 3, k = 2
 Output: 6
 Explanation: Take c1 as color 1, c2 as color 2. All possible ways are:

 post1  post2  post3
 -----      -----  -----  -----
 1         c1     c1     c2
 2         c1     c2     c1
 3         c1     c2     c2
 4         c2     c1     c1
 5         c2     c1     c2
 6         c2     c2     c1
*/

/**
 * @param {number} n posts
 * @param {number} k colors
 * @return {number}
 */
const numWays = function(n, k) {
    if (n === 0) return 0;
    else if (n === 1) return k;
    let diffColorCounts = k * (k - 1);
    let sameColorCounts = k;
    for(let i = 2; i < n; i++) {
        const temp = diffColorCounts;
        diffColorCounts = (diffColorCounts + sameColorCounts) * (k - 1);
        sameColorCounts = temp;
    }
    return diffColorCounts + sameColorCounts;
};

console.log(numWays(3, 2));
/*
    You are climbing a stair case. It takes n steps to reach to the top.

    Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

    Note: Given n will be a positive integer.

    Example 1:

    Input: 2
    Output: 2
    Explanation: There are two ways to climb to the top.
    1. 1 step + 1 step
    2. 2 steps
    Example 2:

    Input: 3
    Output: 3
    Explanation: There are three ways to climb to the top.
    1. 1 step + 1 step + 1 step
    2. 1 step + 2 steps
    3. 2 steps + 1 step
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const mem = {};
    function countWays(n) {
        if (mem[n]) return mem[n];
        if (n < 0) {
            //You have over stepped
            return 0;
        } else if (n === 0) {
            //A step that is valid which, lets return 1
            return 1;
        } else {
            //Recursively call our step function
            const res = countWays(n - 1) + countWays(n - 2);
            //Memoize
            if (!mem.hasOwnProperty(res)) mem[n] = res;
            return res;
        }
    }
    return countWays(n);
};

var climbStairsIterative = function(n) {
    let a = 1;
    let b = 1;

    //Every step you have the option of taking 1 step or two steps. Lets count for both possibilities
    for(let i = 0; i < n; i++){
        let temp = a;
        a += b;
        b = temp;
    }
    return b;
};

console.log(climbStairs(10));
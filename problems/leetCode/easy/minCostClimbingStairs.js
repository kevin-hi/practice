/*
    On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

    Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

    Example 1:
    Input: cost = [10, 15, 20]
    Output: 15
    Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
    Example 2:
    Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
    Output: 6
    Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].
    Note:
    cost will have a length in the range [2, 1000].
    Every cost[i] will be an integer in the range [0, 999].
 */

/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function(cost) {
    if (cost.length === 2) return Math.min(cost[0], cost[1]);

    //Cost to arrive at this particular stair
    //This is the cost for arriving at this step as the final destination, thus it includes the step's value
    const minCostPerStairs = [cost[0], cost[1]];

    for (let i = 2; i < cost.length; i++) {
        //We need to include the stair's value as its destination
        minCostPerStairs.push(cost[i] + Math.min(minCostPerStairs[i - 2], minCostPerStairs[i - 1]));
    }

    console.log(minCostPerStairs);
    //Take last step or not
    return Math.min(minCostPerStairs[cost.length - 1], minCostPerStairs[cost.length - 2]);

};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
/*
    You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

    Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

    Example 1:

    Input: [1,2,3,1]
    Output: 4
    Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
                 Total amount you can rob = 1 + 3 = 4.
    Example 2:

    Input: [2,7,9,3,1]
    Output: 12
    Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
                 Total amount you can rob = 2 + 9 + 1 = 12.
 */

/**
 * Key to this problem for o(n) is to track the most steal-able amount per i as you iterate through.
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    //Keeping an array of the most steal-able amount per every house i
    const p = [nums[0], Math.max(nums[0], nums[1])];

    for (let i = 2; i < nums.length; i++) {
        //For every subsequent house, the most steal-able amount is either current plus current - 2, or current -1
        p.push(Math.max(nums[i] + p[i - 2], p[i - 1]));
    }

    console.log(p);
    //Return the last amount
    return p[p.length - 1];
};

const robTwo = function(nums) {
    let doRob = 0;//max money can get if rob current house
    let notRob = 0;//max money can get if not rob current house
    for(let i = 0; i < nums.length; i++){
        let current = notRob + nums[i];
        //if rob current val, previous house must not be robbed
        notRob = Math.max(notRob, doRob);
        //if not rob ith hous, take the max value of robbed (i-1)house
        doRob = current;
    }
    return Math.max(doRob, notRob);
};

console.log(rob([1,2,3,1]));
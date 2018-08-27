/*
    Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

    Example:

    Input: [-2,1,-3,4,-1,2,1,-5,4],
    Output: 6
    Explanation: [4,-1,2,1] has the largest sum = 6.
    Follow up:

    If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let largest = nums[0];
    let current = nums[0];
    for (let i = 1; i < nums.length; i++) {
        current = current < 0 ? nums[i] : nums[i] + current;
        largest = Math.max(largest, current);
    }
    return largest;
};

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
//console.log(maxSubArray([1,10,1,1,99,2,10,-50, -1]));
console.log(maxSubArray([-1,-10,-1,-1,-4,-1,-1,-10,-100]));
// console.log(maxSubArray([-1]));
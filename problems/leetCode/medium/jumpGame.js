/*
    Given an array of non-negative integers, you are initially positioned at the first index of the array.

    Each element in the array represents your maximum jump length at that position.

    Determine if you are able to reach the last index.

    Example 1:

    Input: [2,3,1,1,4]
    Output: true
    Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
    Example 2:

    Input: [3,2,1,0,4]
    Output: false
    Explanation: You will always arrive at index 3 no matter what. Its maximum
                 jump length is 0, which makes it impossible to reach the last index.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
    let reachablePoint = nums.length - 1;

    //Start with 2nd to last point to see if that point can reach the end
    for (let i = nums.length - 2; i >= 0; i--)
        //How many steps we can take here is greater or equal to the difference between the
        //last reachable point minus current position
        //We keep going back and see if we can reach the last reachable point
        if (nums[i] >=  reachablePoint - i) reachablePoint = i;

    return reachablePoint === 0;
};

console.log(canJump([2, 3, 1, 1, 4]));
/*
    Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

    Example:

    Input:  [1,2,3,4]
    Output: [24,12,8,6]
    Note: Please solve it without division and in O(n).

    Follow up:
    Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelfBruteForce = function(nums) {

    const forwardProductHistory = [];
    const backwardProductHistory = [];
    let accumulator = 1;
    for (let i = 0; i < nums.length; i++) {
        accumulator *= nums[i];
        forwardProductHistory[i] = accumulator;
    }

    accumulator = 1;

    for (let j = nums.length - 1; j >= 0; j--) {
        accumulator *= nums[j];
        backwardProductHistory[j] = accumulator;
    }

    for (let k = 0; k < nums.length; k++) {
        const backwardsProduct = backwardProductHistory[k + 1] !== undefined ? backwardProductHistory[k + 1] : 1;
        const forwardsProduct = forwardProductHistory[k - 1] !== undefined ? forwardProductHistory[k - 1] : 1;
        nums[k] = backwardsProduct * forwardsProduct;
    }

    return nums;
};

const productExceptSelf = function(nums) {
    const output = [];
    let leftProduct = 1;
    let rightProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        //Setting output to be skipping the current element
        output[i] = rightProduct;
        //Calculate the current element multiplied by previous
        rightProduct *= nums[i];
    }

    for (let j = 0; j < nums.length; j++) {
        output[j] *= leftProduct;
        leftProduct *= nums[j];
    }

    return output;
};

console.log(productExceptSelf([1,2,3,4]));
// console.log(productExceptSelf([1,0]));
// console.log(productExceptSelf([0,0]));
/*
    Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

    Example 1:

    Input: [2,3,-2,4]
    Output: 6
    Explanation: [2,3] has the largest product 6.
    Example 2:

    Input: [-2,0,-1]
    Output: 0
    Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProductBruteForce = function(nums) {
    let largest = nums[0];

    for (let i = 0; i < nums.length; i++) {
        let product = nums[i];
        if (product > largest) largest = product;
        for (let j = i + 1; j < nums.length; j++) {
            product *= nums[j];
            if (product > largest) largest = product;
            console.log(`product ${largest}`);
        }
    }

    return largest;
};

const maxProduct = function(nums) {
    let result = -Infinity;
    let min = 1;
    let max = 1;

    for (let i of nums){
        const lastMin = min;
        const lastMax = max;
        //Three possible scenarios
        //1. Encounter negative, we keep track of the most negative element and thus have new max
        //2. Encounter positive, we add current to last max
        //3. New starting point, we use i
        min = Math.min(i, i * lastMax, i * lastMin);
        max = Math.max(i, i * lastMax, i * lastMin);
        result = Math.max(result, max);
    }
    return result;
};


console.log(maxProduct([2, 3, -2, 4]));

// console.log(maxProduct([-2, 0, -1]));
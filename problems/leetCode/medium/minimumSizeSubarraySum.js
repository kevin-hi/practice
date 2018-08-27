/*
    Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

    Example:

    Input: s = 7, nums = [2,3,1,2,4,3]
    Output: 2
    Explanation: the subarray [4,3] has the minimal length under the problem constraint.
    Follow up:
    If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).
 */

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLenOne = function(s, nums) {
    //nums.sort();

    let sum = 0;
    let counter = 1;

    let res = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= s) return 1;
        counter = 0;
        sum = 0;

        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            counter++;
            if (sum >= s && sum > 0) {
                res[i] = counter;
                break;
            }
        }
    }

    console.log(res);
    if (!res.length) return 0;
    return Math.min(...res);
};

const minSubArrayLen = function(s, nums) {
    let min = Infinity;

    for (let i = 0, j = 0, sum = 0; j < nums.length; j++) {
        sum += nums[j];
        console.log('j: ' + nums[j]);
        console.log('sum: ' + sum);

        while (sum >= s) {
            console.log(sum);
            min = Math.min(min, j - i + 1);
            console.log('min: ' + min);
            sum -= nums[i++];
        }
    }

    return min === Infinity ? 0 : min;
};

// console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
// console.log(minSubArrayLen(4, [1, 4, 4]));
// console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
// console.log(minSubArrayLen(100, []));
console.log(minSubArrayLen(15, [5,1,3,5,10,7,4,9,2,8]));
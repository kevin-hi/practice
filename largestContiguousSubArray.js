/**
 * One pass solution for finding largest contiguous subarray
 * Runtime: O(n) Space: O(1)
 * @param nums
 * @returns {{sum: number, segment: [number, number]}}
 */
function findMaximumSubArray (nums) {
    let largest = nums[0];
    let current = nums[0];
    let start = 0;
    let end = 0;

    for (let i = 1; i < nums.length; i++) {

        //If current sum is less than 0, reset starting point to be current element
        //Else set current element to be current and the previous
        if (current < 0) {
            current = nums[i];
            start = i;
        } else {
            current += nums[i];
        }

        //If current sum is largest, set largest and set end index
        if (current > largest) {
            largest = current;
            end = i;
        }

    }

    return ({sum: largest, segment: [start, end]});
}

/**
 * Dynamic programming solution for finding largest contiguous subarray
 * Runtime: O(n) Space: O(n) if we don't modify input
 * @param nums
 * @returns {{sum: number, segment: [number, number]}}
 */
function findMaximumSubArrayDP (nums) {
    let start = 0;
    let end = 0;
    let largest = nums[0];

    for (let i = 1; i < nums.length; i++){

        const currentPlusPrev = nums[i] + nums[i - 1];

        //Using current element to store current highest
        //Else reset starting position
        if (currentPlusPrev > nums[i]) {
            nums[i] = currentPlusPrev;
        } else {
            start = i;
        }

        //If current sum is the largest, set largest and set end index
        if (nums[i] > largest) {
            largest = nums[i];
            end = i;
        }

    }

    return ({sum: largest, segment: [start, end]});
}

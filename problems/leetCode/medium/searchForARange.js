/*
    Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

    Your algorithm's runtime complexity must be in the order of O(log n).

    If the target is not found in the array, return [-1, -1].

    Example 1:

    Input: nums = [5,7,7,8,8,10], target = 8
    Output: [3,4]
    Example 2:

    Input: nums = [5,7,7,8,8,10], target = 6
    Output: [-1,-1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function(nums, target) {
    if (nums.length === 1 && nums[0] === target) return [0, 0];
    let l = 0;
    let r = nums.length - 1;
    let low = -1;
    let high = -1;

    while (l <= r) {
        const mid = Math.floor((l + r)/2);
        console.log(mid);
        if (nums[mid] === target) {
            console.log(mid);
            low = mid;
            high = mid;
            while (nums[low - 1] === nums[mid]) low--;
            while (nums[high + 1] === nums[mid]) high++;
            break;
        }
        if (target > nums[mid]) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    console.log(`low ${low} high ${high}`);
    return [low, high];
};

// console.log(searchRange([5,7,7,8,8,10], 8));
// console.log(searchRange([5,7,7,8,8,10], 6));

console.log(searchRange([1], 1));
console.log(searchRange([1], 0));
console.log(searchRange([2, 2], 2));

console.log(searchRange([1, 4], 4));
/*
    A peak element is an element that is greater than its neighbors.

    Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

    The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

    You may imagine that nums[-1] = nums[n] = -∞.

    Example 1:

    Input: nums = [1,2,3,1]
    Output: 2
    Explanation: 3 is a peak element and your function should return the index number 2.
    Example 2:

    Input: nums = [1,2,1,3,5,6,4]
    Output: 1 or 5
    Explanation: Your function can return either index number 1 where the peak element is 2,
                 or index number 5 where the peak element is 6.
    Note:

    Your solution should be in logarithmic complexity.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function(nums) {
    if (nums.length < 2) return 0;
    //Initialize left and right, 0 and end.
    let l = 0;
    let r = nums.length - 1;

    //While right is greater than left
    while (l < r) {
        //Calculate mid point, which is left and right divide by 2 floored
        const mid = Math.floor((l + r) / 2);
        //If mid is greater than mid + 1
        if (nums[mid] > nums[mid + 1]) {
            //Slide right side to mid
            r = mid;
        } else {
            //Slide left side to mid + 1
            l = mid + 1;
        }
    }
    return l;
};

// console.log(findPeakElement([1,2,3,1]));
// console.log(findPeakElement([1,2,1,3,5,6,4]));

console.log(findPeakElement([2,2,2,2,1,2,4]));
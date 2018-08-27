/*
    Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

    Formally the function should:
    Return true if there exists i, j, k
    such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
    Your algorithm should run in O(n) time complexity and O(1) space complexity.

    Examples:
    Given [1, 2, 3, 4, 5],
    return true.

    Given [5, 4, 3, 2, 1],
    return false.

    Credits:
    Special thanks to @DjangoUnchained for adding this problem and creating all test cases.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {

    if (nums.length < 3) return false;

    let small = nums[0];
    let big = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < small) {
            //Smallest we have seen so far, 1st element candidate
            small = nums[i];
        } else if (nums[i] > small && nums[i] < big) {
            big = nums[i];
        } else if (nums[i] > small && nums[i] > big) {
            return true;
        }
    }

    return false;
};

// console.log(increasingTriplet([1, 2, 3, 4, 5]));
// console.log(increasingTriplet([2,4,-2,-3]));
// console.log(increasingTriplet([5, 4, 3, 2, 1]));
console.log(increasingTriplet([5,1,5,5,2,5,4]));
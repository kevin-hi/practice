/*
    Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

    Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

    Note: You are not suppose to use the library's sort function for this problem.

    Example:

    Input: [2,0,2,1,1,0]
    Output: [0,0,1,1,2,2]
    Follow up:

    A rather straight forward solution is a two-pass algorithm using counting sort.
    First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
    Could you come up with a one-pass algorithm using only constant space?
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

    const aux = [];
    split(nums, 0, nums.length - 1);

    function split (a, lo, hi) {
        if (lo >= hi) return;
        const mid = parseInt(lo + (hi - lo)/2);
        split(a, lo, mid);
        split(a, mid + 1, hi);
        merge(a, lo, mid, hi);
    }

    function merge(a, lo, mid, hi) {
        let i = lo;
        let j = mid + 1;

        for (let k = lo; k <= hi; k++) aux[k] = a[k];
        for (let k = lo; k <= hi; k++) {
            if (i > mid) a[k] = aux[j++];
            else if (j > hi) a[k] = aux[i++];
            else if (aux[j] < aux[i]) a[k] = aux[j++];
            else a[k] = aux[i++]
        }
    }
};

const nums = [2,0,2,1,1,0];
sortColors(nums);
console.log(nums);
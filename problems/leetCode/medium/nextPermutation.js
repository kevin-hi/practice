/*
    Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

    If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

    The replacement must be in-place and use only constant extra memory.

    Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

    1,2,3 → 1,3,2
    3,2,1 → 1,2,3
    1,1,5 → 1,5,1
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function(nums) {

    let i = nums.length - 2;

    //Look for first 2 numbers with descending sequence
    while (i >= 0 && nums[i + 1] <= nums[i]) i--;

    //If descending found, find next smallest going forward
    if (i >= 0) {
        let j = nums.length - 1;

        //Look for first element larger than value of i
        while (j >= 0 && nums[j] <= nums[i]) j--;

        swap(i, j);
    }

    //Reverse all elements before i, as they are already in descending order, reversing will ensure the smallest
    reverse(i + 1);


    //Reverse function given a starting index;
    function reverse(start) {
        let i = start, j = nums.length - 1;
        while (i < j) {
            swap(i, j);
            i++;
            j--;
        }
    }

    function swap(i, j) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    console.log(nums);
};

//nextPermutation([1,2,3]);
// nextPermutation([1]);

// nextPermutation([3,2,1]);
nextPermutation([1,1,5]);

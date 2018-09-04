/*
    Given an unsorted array of integers, find the length of longest increasing subsequence.

    Example:

    Input: [10,9,2,5,3,7,101,18]
    Output: 4
    Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
    Note:

    There may be more than one LIS combination, it is only necessary for you to return the length.
    Your algorithm should run in O(n2) complexity.
    Follow up: Could you improve it to O(n log n) time complexity?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLISBruteForce = function(nums) {
    if (!nums) return 0;
    if (nums.length === 1) return 1;

    function findLength(prev, current) {
        if (current === nums.length) return 0;

        let taken = 0;
        if (nums[current] > prev) taken = 1 + findLength(nums[current], current + 1);

        let notTaken = findLength(prev, current + 1);
        return Math.max(taken, notTaken);

    }

    return findLength(-Infinity, 0);
};

/**
 * Bottom up longest sequence
 * @param nums
 * @returns {number}
 */
const lengthOfLIS = function(nums) {
    if (!nums) return 0;
    if (nums.length === 1) return 1;

    //Initialize with a array that captures all longest sub sequence per index
    //All values are initialized with a 1 as all numbers are guaranteed to have 1
    const longestSubSequenceStore = [1];
    longestSubSequenceStore.length = nums.length;

    //Variable to store the longest seen thus far
    let longest = 0;

    //Loop through all longest sub sequence array
    for (let i = 1; i < longestSubSequenceStore.length; i++) {
        let currentLongest = 0;
        //Loop through all numbers from 0 to current index
        //If runner is bigger than current index, longest is the longest of sub sequence
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) currentLongest = Math.max(currentLongest, longestSubSequenceStore[j]);
        }

        //Longest sub sequence is at least the longest sub sequence plus one
        longestSubSequenceStore[i] = currentLongest + 1;

        //Set longest as we go
        longest = Math.max(longest, longestSubSequenceStore[i]);
    }

    return longest;

};


// console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));  //4

console.log(lengthOfLIS([10,9,2,5,3,4]));
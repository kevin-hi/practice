/*
    Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

    Example:

    Given array nums = [-1, 2, 1, -4], and target = 1.

    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function(nums, target) {

    nums.sort((a, b) => a - b);
    let closestSum = Infinity;
    let smallestDiff = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            const diff = Math.max(target, sum) - Math.min(target, sum);

            if (diff === 0) return sum;

            if (diff < smallestDiff) {
                smallestDiff = diff;
                closestSum = sum;
            }

            if (sum > target) k--;
            else j++;

        }
    }

    return closestSum;

};
console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([0, 1, 2], 3));
console.log(threeSumClosest([1,1,1,0], -100));
console.log(threeSumClosest([1,2,4,8,16,32,64,128], 82));


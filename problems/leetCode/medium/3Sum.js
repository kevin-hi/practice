/*
    Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

    Note:

    The solution set must not contain duplicate triplets.

    Example:

    Given array nums = [-1, 0, 1, 2, -1, -4],

    A solution set is:
    [
      [-1, 0, 1],
      [-1, -1, 2]
    ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
    const res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        //If we are past 0 as the first number when sorted, return out as no further answers are possible
        if (nums[i] > 0) return res;
        //Skip if current is the same as previous
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        //Two pointers
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) res.push([nums[i], nums[j], nums[k]]);
            //If sum is greater than 0 then we need to move end pointer back
            if (sum >= 0) {
                //Keep moving pointer if the numbers are the same
                while (nums[k - 1] === nums[k]) k--;
                k--;
            }

            //If sum is smaller than 0 then we need to move first pointer forward
            if (sum <= 0) {
                //Keep moving pointer if the numbers are the same
                while (nums[j + 1] === nums[j]) j++;
                j++;
            }
        }
    }

    return res;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
//console.log(threeSum([0,0,0,0]));
// console.log(threeSum([-2,0,1,1,2]));
// console.log(threeSum([-2,0,0,2,2]));
console.log(threeSum([1,-1,-1,0]));
// threeSum([-13,5,13,12,-2,-11,-1,12,-3,0,-3,-7,-7,-5,-3,-15,-2,14,14,13,6,-11,-11,5,-15,-14,5,-5,-2,0,3,-8,-10,-7,11,-5,-10,-5,-7,-6,2,5,3,2,7,7,3,-10,-2,2,-12,-11,-1,14,10,-9,-15,-8,-7,-9,7,3,-2,5,11,-13,-15,8,-3,-7,-12,7,5,-2,-6,-3,-10,4,2,-5,14,-3,-1,-10,-3,-14,-4,-3,-7,-4,3,8,14,9,-2,10,11,-10,-4,-15,-9,-1,-1,3,4,1,8,1]);
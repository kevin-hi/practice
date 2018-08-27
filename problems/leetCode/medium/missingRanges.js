/*
    Given a sorted integer array nums, where the range of elements are in the inclusive range [lower, upper], return its missing ranges.

    Example:

    Input: nums = [0, 1, 3, 50, 75], lower = 0 and upper = 99,
    Output: ["2", "4->49", "51->74", "76->99"]
 */


/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
const findMissingRanges = function(nums, lower, upper) {
    if (nums[0] !== lower) nums.unshift(lower - 1);
    if (nums[nums.length - 1] !== upper) nums.push(upper + 1);

    const res = [];
    for (let i = 1; i < nums.length; i++) {

        //Skip all iterations where previous item equals to current
        if (nums[i] === nums[i - 1]) continue;

        //If intended previous item does not equal current
        if (nums[i] !== nums[i - 1] + 1) {
            //Single item case
            if ((nums[i - 1] + 1) - (nums[i] - 1) === 0 ) {
                res.push(`${nums[i - 1] + 1}`);
            } else {
                //Range item case
                res.push(`${nums[i - 1] + 1}->${nums[i] - 1}`);
            }
        }
    }

    return res;

};

// console.log(findMissingRanges([0, 1, 3, 50, 75], 0, 99));
// console.log(findMissingRanges([], -3, -1));
console.log(findMissingRanges([1, 1, 1], 1, 1));
// console.log(findMissingRanges([-1], -2, -1));  //expect ['-2']
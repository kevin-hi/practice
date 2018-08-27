/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const part = nums.splice(nums.length - k, k);
    for (let i = part.length - 1; i >= 0; i--) {
        nums.unshift(part[i]);
    }
};

const t = [1,2,3,4,5,6,7];

// rotate(t, 1);
// rotate(t, 2);
rotate(t, 3);
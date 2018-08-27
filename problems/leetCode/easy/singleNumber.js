/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums && nums.length === 1) return nums[0];
    for (var i = 0; i < nums.length; i++) {
        const prev = nums[i];
        nums[i] = false;
        var index = nums.includes(prev);
        // console.log(prev);
        if (!index) {
            console.log(prev);
            return prev;
        }
        nums[i] = prev;
    }
};

// singleNumber([2,2,1]);
// singleNumber([4,1,2,1,2]);
// singleNumber([-1]);
singleNumber([1,3,1,-1,3]);
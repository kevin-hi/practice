/*
    Shuffle a set of numbers without duplicates.

    Example:

    // Init an array with set 1, 2, and 3.
    int[] nums = {1,2,3};
    Solution solution = new Solution(nums);

    // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
    solution.shuffle();

    // Resets the array back to its original configuration [1,2,3].
    solution.reset();

    // Returns the random shuffling of array [1,2,3].
    solution.shuffle();
 */

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = [...nums];
    this.prev = [...nums];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    for (let i = 0; i < this.nums.length; i++) {
        this.nums[i] = this.prev[i];
    }
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    for (let i = 0; i < this.nums.length; i++) {
        const prev = this.nums[i];
        const randomIndex = Math.floor(Math.random() * Math.floor(this.nums.length));
        this.nums[i] = this.nums[randomIndex];
        this.nums[randomIndex] = prev;
    }
    return this.nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

var obj = new Solution([1, 2, 3]);
obj.shuffle();
console.log(obj);
obj.reset();
console.log(obj);
obj.shuffle();
console.log(obj);
obj.reset();
console.log(obj);
obj.shuffle();
console.log(obj);
obj.reset();
console.log(obj);

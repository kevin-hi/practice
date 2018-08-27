/**
 Given an integer, write a function to determine if it is a power of three.

 Example 1:

 Input: 27
 Output: true

 Example 2:

 Input: 0
 Output: false

 Example 3:

 Input: 9
 Output: true

 Example 4:

 Input: 45
 Output: false

 Follow up:
 Could you do it without using any loop / recursion?
 **/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while (n >= 1) {
        if (n === 1) return true;
        n /= 3;
    }
    return false;
};

/**
 * The biggest power of 3 that fits into signed 32 bits is 1162261467 (3^19)
 * Check if it divides n with no remainder
 * @param n
 * @returns {boolean}
 */
var isPowerOfThree = function(n) {
    return n > 0 && 1162261467 % n === 0;
};


var isPowerOfThreeRecursive = function(n) {
    const mem = {};
    function divideByThree(n) {
        if (mem[n]) return mem[n];
        if (n === 1) return true;
        if (n % 3 !== 0) return false;
        const res = divideByThree(n/3);
        if (!mem[n]) mem[n] = res;
        return res;
    }

    return divideByThree(n);
};

console.log(isPowerOfThree(59049));
/*
    Write a program to find the n-th ugly number.

    Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

    Example:

    Input: n = 10
    Output: 12
    Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
    Note:

    1 is typically treated as an ugly number.
    n does not exceed 1690.
 */

/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumberTLE = function(n) {

    const uglyNumberMem = {};
    const isUglyNumber = num => {
        if (uglyNumberMem[num] !== undefined) return uglyNumberMem[num];
        if (num % 5 !== 0 && num % 3 !== 0 && num % 2 !== 0) {
            uglyNumberMem[num] = false;
            return false;
        }
        for (let i = 2; i <= num; i++) {
            if (num % i === 0 && isPrime(i) && (i !== 5 && i !== 3 && i !== 2)) {
                uglyNumberMem[num] = false;
                return false;
            }
        }
        uglyNumberMem[num] = true;
        return true;
    };


    const primeMem = {};
    const isPrime = num => {
        if (primeMem[num] !== undefined) return primeMem[num];
        for (let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j === 0) {
                primeMem[num] = false;
                return false;
            }
        }
        primeMem[num] = true;
        return true;
    };

    let res = [1];
    let counter = 1;

    while (res.length < n) {
        counter++;
        if(isUglyNumber(counter)) res.push(counter);
    }

    console.log(res);
    return res[res.length - 1];
};

const nthUglyNumber = n => {
    const nums = new Array(n);
    nums[0] = 1;
    let index2 = 0, index3 = 0, index5 = 0;

    for (let i = 1; i < n; i++) {
        nums[i] = Math.min(nums[index2] * 2, nums[index3] * 3, nums[index5] * 5);
        if (nums[i] === nums[index2] * 2) index2++;
        if (nums[i] === nums[index3] * 3) index3++;
        if (nums[i] === nums[index5] * 5) index5++;
    }

    return nums[n - 1];
};

// console.log(nthUglyNumber(10));
console.log(nthUglyNumber(10));
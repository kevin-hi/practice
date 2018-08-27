/*
    Count the number of prime numbers less than a non-negative number, n.

    Example:

    Input: 10
    Output: 4
    Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 */

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let count = 0;
    const sieve = new Array(n);
    sieve[0] = sieve[1] = true;
    for (let i = 2; i < sieve.length; ++i) {
        if (!sieve[i]) {
            ++count;
            for (let j = i + i; j < sieve.length; j += i) {
                sieve[j] = true;
            }
        }
    }
    return count;
};

console.log(countPrimes(10));
console.log(countPrimes(12));
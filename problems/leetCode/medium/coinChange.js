/*
    You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

    Example 1:

    Input: coins = [1, 2, 5], amount = 11
    Output: 3
    Explanation: 11 = 5 + 5 + 1
    Example 2:

    Input: coins = [2], amount = 3
    Output: -1
    Note:
    You may assume that you have an infinite number of each kind of coin.
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function(coins, amount) {
    const map = {};

    function change(total) {
        if (total === 0) return 0;
        if (map[total] !== undefined) return map[total];

        let min = Infinity;
        for (let i = 0; i < coins.length; i++) {
            if (coins[i] > total) continue;

            const val = change(total - coins[i]);

            if (val < min) min = val;
        }

        min = min === Infinity ? min : min + 1;
        map[total] = min;
        return min;
    }

    const res = change(amount);
    return res !== Infinity ? res : -1;
};

console.log(coinChange([1, 2, 5], 11));
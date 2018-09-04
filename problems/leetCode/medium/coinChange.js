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
const coinChangeRecursive = function(coins, amount) {
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

const coinChange = (coins, amount) => {
    //Initialize memoize array with 0 to amount, fill it with Infinity, assuming its impossible to change all
    const mem = Array(amount + 1).fill(Infinity);

    //0 coins to change 0 amount
    mem[0] = 0;

    //Bottom up, start with first coin and see how many we need to change it
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            //If coin value is less or equal to current value
            //Then set the current amount to be equal to the smallest of either current value or current value minus first coin and add 1 for that coin
            if (coins[j] <= i) mem[i] = Math.min(mem[i], mem[i - coins[j]] + 1);
        }
    }

    //Check if amount is possible (Infinity) or not, return if its possible
    return mem[amount] > amount ? -1 : mem[amount];
};

console.log(coinChange([1, 2, 5], 11));
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * @see {@link https://leetcode.cn/problems/coin-change/}
 * @label 完全背包问题 动态规划 
 */
var coinChange = function (coins, amount) {
    const dp = Array(amount + 1).fill(Infinity); // 这里一开始写的是初始化为0，但是下面是Math.min，应该是初始化为Infinity
    dp[0] = 0;

    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 3], 5));
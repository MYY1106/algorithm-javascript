/**
 * @param {number} n
 * @return {number}
 * @see {@link https://leetcode.cn/problems/perfect-squares/}
 * @key 与322零钱兑换差不多，只是多了一个找可以取到的最大完全平方数的步骤而已
 * @label 完全背包问题 动态规划 
 */
var numSquares = function (n) {
    const maxNum = parseInt(Math.sqrt(n));
    dp = Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= maxNum; i++) {
        for (let j = i ** 2; j <= n; j++) {
            dp[j] = Math.min(dp[j], dp[j - i ** 2] + 1);
        }
    }

    return dp[n];
};
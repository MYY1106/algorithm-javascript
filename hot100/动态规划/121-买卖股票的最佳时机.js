/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const dp = [0, -prices[0]];

    for (let i = 1; i < prices.length; i++) {
        dp[0] = Math.max(dp[0], dp[1] + prices[i]);
        dp[1] = Math.max(dp[1], -prices[i]);
    }

    return dp[0];
};
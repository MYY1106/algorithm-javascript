/**
 * @param {number[]} prices
 * @return {number}
 * @see {@link https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/}
 * @see {@link https://programmercarl.com/0123.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BAIII.html}
 * @key 为什么这样写就能推出结果呢？
 * @label 不理解 动态规划 买卖股票 
 */
var maxProfit = function (prices) {
    const dp = Array(prices.length).fill().map(() => []);
    dp[0] = [0, -prices[0], 0, -prices[0], 0];

    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = dp[i - 1][0];
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
        dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i]);
        dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i]);
        dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i]);
    }
    console.log(dp);
    return Math.max(dp[dp.length - 1][2], dp[dp.length - 1][4])
};
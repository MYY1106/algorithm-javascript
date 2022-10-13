/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 * @see {@link https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/}
 * @key 与122差不多，区别就是在本题交易要给手续费！
 * @key 所以只需要在交易时减去手续费就行
 * @label 动态规划 买卖股票 滚动数组
 */
var maxProfit = function (prices, fee) {
    let dp = [0, -prices[0]];
    // let dp = [0, -prices[0] - fee]; // 将手续费放在买入阶段要这么写

    for (let i = 1; i < prices.length; i++) {
        oldNotHave = dp[0];
        oldHave = dp[1];
        dp[0] = Math.max(oldNotHave, prices[i] + oldHave - fee);
        dp[1] = Math.max(oldHave, oldNotHave - prices[i]);
    }

    return dp[0];
};
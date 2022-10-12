/**
 * @param {number[]} prices
 * @return {number}
 * @see {@link https://leetcode.cn/problems/best-time-to-buy-and-sell-stock}
 * @see {@link https://programmercarl.com/0121.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA.html}
 * @key 当天不持有股票的情况下所拥有的现金：dp[i][0] = 昨天就不持有股票，那么就保持现状，所得现金就是昨天不持有股票的所得现金 + 今天卖出股票，所得现金就是按照今天股票佳价格卖出后所得现金
 * @key 当天持有股票的情况下所拥有的现金：dp[i][1] = 昨天就持有股票，那么就保持现状，所得现金就是昨天持有股票的所得现金 + 今天买入股票，所得现金就是买入今天的股票后所得现金
 * @label 动态规划 买卖股票
 */
var maxProfit = function (prices) {
    // const dp = Array(prices.length).fill([]); // 这样写是错的，只会将[]（相同引用）赋值给每个元素
    const dp = Array(prices.length).fill().map(() => []);
    dp[0] = [0, -prices[0]];

    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], prices[i] + dp[i - 1][1]);
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
        console.log(dp);
    }

    return dp[dp.length - 1][0];
};


/**
 * @param {number[]} prices
 * @return {number}
 * @see {@link https://leetcode.cn/problems/best-time-to-buy-and-sell-stock}
 * @see {@link https://programmercarl.com/0121.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA.html}
 * @key 当天不持有股票的情况下所拥有的现金：dp[0] = 昨天就不持有股票，那么就保持现状，所得现金就是昨天不持有股票的所得现金 + 今天卖出股票，所得现金就是按照今天股票佳价格卖出后所得现金
 * @key 当天持有股票的情况下所拥有的现金：dp[1] = 昨天就持有股票，那么就保持现状，所得现金就是昨天持有股票的所得现金 + 今天买入股票，所得现金就是买入今天的股票后所得现金
 * @label 动态规划 买卖股票 滚动数组
 */
var maxProfit = function (prices) {
    const dp = [0, -prices[0]];

    for (let i = 1; i < prices.length; i++) {
        dp[0] = Math.max(dp[0], prices[i] + dp[1]);
        dp[1] = Math.max(dp[1], -prices[i]);
        console.log(dp);
    }

    return dp[0];
};
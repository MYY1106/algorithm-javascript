/**
 * @param {number[]} prices
 * @return {number}
 * @see {@link https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown}
 * @see {@link https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/solution/fei-zhuang-tai-ji-de-dpjiang-jie-chao-ji-tong-su-y/}
 * @key 与122差不多，区别就是在本题有冷冻期
 * @key 题目中定义的“冷冻期”=卖出的那一天的后一天，题目设置冷冻期的意思是，如果昨天卖出了，今天不可买入，那么关键在于哪一天卖出，只要在今天想买入的时候判断一下前一天是不是刚卖出，即可，所以关键的一天其实是卖出的那一天，而不是卖出的后一天
 * @label 动态规划 买卖股票 滚动数组
 */
var maxProfit = function (prices) {
    const dp = [-prices[0], 0, 0];

    for (let i = 0; i < prices.length; i++) {
        const oldDp = [...dp];
        dp[0] = Math.max(oldDp[0], oldDp[2] - prices[i]); // 持股 
        dp[1] = Math.max(oldDp[0] + prices[i]); // 当天不持股且卖出了
        dp[2] = Math.max(oldDp[2], oldDp[1]); // 当天不持股且没卖出
    }

    return Math.max(dp[1], dp[2]);
};
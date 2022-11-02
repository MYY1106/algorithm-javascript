/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] >= prices[i + 1]) continue;

        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] >= prices[j + 1] || j === prices.length - 1) {
                profit += prices[j] - prices[i]
                i = j;
                break;
            }
        }
    }

    return profit;
};


/**
 * @param {number[]} prices
 * @return {number}
 * @see {@link https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii}
 * @see {@link https://programmercarl.com/0122.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BAII.html#}
 * @key 本题中理解利润拆分是关键点！ 不要整块的去看，而是把整体利润拆为每天的利润，上面的方法就是没有拆开看，而是整块看
 * @key 一旦想到这里了，很自然就会想到贪心了
 * @key 只要两天的差值是正利润，那就买入，如果两天差值是负利润，不买入
 * @label 贪心 买卖股票
 */
var maxProfit = function (prices) {
    let profit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i] < prices[i + 1])
            profit += prices[i + 1] - prices[i];
    }

    return profit;
};


/**
 * @param {number[]} prices
 * @return {number}
 * @see {@link https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii}
 * @key 与121差不多，区别就是在本题的股票可以买卖多次！ 所以买入股票的时候，可能会有之前买卖的利润即：dp[0]，所以dp[0] - prices[i]
 * @key 当天不持有股票的情况下所拥有的现金：dp[0] = 昨天就不持有股票，那么就保持现状，所得现金就是昨天不持有股票的所得现金 + 今天卖出股票，所得现金就是按照今天股票佳价格卖出后所得现金
 * @key 当天持有股票的情况下所拥有的现金：dp[1] = 昨天就持有股票，那么就保持现状，所得现金就是昨天持有股票的所得现金 + 今天买入股票，所得现金就是买入今天的股票后所得现金
 * @label 动态规划 买卖股票 滚动数组
 */
var maxProfit = function (prices) {
    let dp = [0, -prices[0]];

    for (let i = 1; i < prices.length; i++) {
        oldNotHave = dp[0];
        oldHave = dp[1];
        dp[0] = Math.max(oldNotHave, prices[i] + oldHave);
        dp[1] = Math.max(oldHave, oldNotHave - prices[i]);
    }

    return dp[0];
};

/**
 * @param {number[]} prices
 * @return {number}
 * @see {@link https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii}
 * @key 与121差不多，区别就是在本题的股票可以买卖多次！ 所以买入股票的时候，可能会有之前买卖的利润即：dp[0]，所以dp[0] - prices[i]
 * @key 跟第三种解法不同的就是没有存前一天的dp[0] dp[1]，为什么不存也是对的？ dp[0] = Math.max(dp[0], dp[1] + prices[i]); dp[1] = dp[0] - prices[i]; ---->第一行，假设 dp[0] > dp[1] + prices[i]; ，那么第二行的dp[0] - prices[i]一定大于之前的dp[1]，更新就好，即：dp[1] = dp[0] - prices[i];. 如果 第一行 dp[0] < dp[1] + prices[i]，那么 第一行执行后dp[0] = dp[1] + prices[i], 那么 dp[1] = Math.max(dp[1], dp[0] - prices[i]);这句的意思就是dp[1] = max(dp[1], dp[1]), 所以 dp[1] 还是等于dp[1]。
 * @key 当天不持有股票的情况下所拥有的现金：dp[0] = 昨天就不持有股票，那么就保持现状，所得现金就是昨天不持有股票的所得现金 + 今天卖出股票，所得现金就是按照今天股票佳价格卖出后所得现金
 * @key 当天持有股票的情况下所拥有的现金：dp[1] = 昨天就持有股票，那么就保持现状，所得现金就是昨天持有股票的所得现金 + 今天买入股票，所得现金就是买入今天的股票后所得现金
 * @label 动态规划 买卖股票 滚动数组
 */
var maxProfit = function (prices) {
    let dp = [0, -prices[0]];

    for (let i = 1; i < prices.length; i++) {
        dp[0] = Math.max(dp[0], prices[i] + dp[1]);
        dp[1] = Math.max(dp[1], dp[0] - prices[i]);
    }

    return dp[0];
};
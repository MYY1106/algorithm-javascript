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
 * @label 贪心 股票
 */
var maxProfit = function (prices) {
    let profit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i] < prices[i + 1])
            profit += prices[i + 1] - prices[i];
    }

    return profit;
};


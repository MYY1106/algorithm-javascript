/**
 * @param {number[]} cost
 * @return {number}
 * @see {@link https://leetcode.cn/problems/min-cost-climbing-stairs/}
 * @see {@link https://programmercarl.com/0746.%E4%BD%BF%E7%94%A8%E6%9C%80%E5%B0%8F%E8%8A%B1%E8%B4%B9%E7%88%AC%E6%A5%BC%E6%A2%AF.html}
 * @label 动态规划 待复习
 */
var minCostClimbingStairs = function (cost) {
    const dp = [cost[0], cost[1]];
    for (let i = 2; i < cost.length; i++) {
        const sum = Math.min(dp[0], dp[1]) + cost[i]; // 到达i层所需要的花费 = Math.min(i-1层的花费和i-2层的花费) + 这一层的花费
        dp[0] = dp[1];
        dp[1] = sum;
    }

    return Math.min(dp[0], dp[1]); // 到达楼顶可以从 cost.length-1层跨一步 或 cost.length-2层跨两步 到达
};
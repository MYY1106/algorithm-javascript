/**
 * @param {number} n
 * @return {number}
 * @see {@link https://leetcode.cn/problems/climbing-stairs}
 * @label 动态规划
 * @key 爬到1层有1种方法，爬到2层有两种方法
 * @key 爬到3层可以从1层跨两步，还可以从3层跨一步
 * @key 所以 dp[i] = dp[i - 1] + dp[i - 2]
 * @complexity 时间复杂度：O(n)  空间复杂度：O(1)
 */
var climbStairs = function (n) {
    if (n <= 2) return n;

    const dp = [1, 2];

    for (let i = 3; i <= n; i++) {
        const sum = dp[0] + dp[1];
        dp[0] = dp[1];
        dp[1] = sum;
    }

    return dp[1];
};
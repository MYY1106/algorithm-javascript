/**
 * @param {number} n
 * @return {number}
 * @see {@link https://leetcode.cn/problems/climbing-stairs}
 * @label 动态规划 已复习*1
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


/**
 * @param {number} n
 * @return {number}
 * @see {@link https://leetcode.cn/problems/climbing-stairs}
 * @label 动态规划 完全背包问题
 * @key 用 1 2 装满 n 有多少种方法
 */
var climbStairs = function (n) {
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;
    for (let j = 0; j <= n; j++) { // 遍历背包
        for (let i = 1; i <= 2; i++) { // 遍历物品

            if (j >= i) {
                dp[j] += dp[j - i];
            }
        }
    }

    return dp[n];
};
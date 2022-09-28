/**
 * @param {number} n
 * @return {number}
 * @see {@link https://leetcode.cn/problems/fibonacci-number/}
 * @complexity 时间复杂度：O(n)  空间复杂度：O(1)
 * @label 动态规划 
 */
var fib = function (n) {
    if (n <= 1) return n;

    const dp = [0, 1];

    for (let i = 2; i < n + 1; i++) {
        const sum = dp[0] + dp[1]; // 递推公式
        dp[0] = dp[1];
        dp[1] = sum;
    }

    return dp[1];
};
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * @see {@link https://leetcode.cn/problems/unique-paths}
 * @key 想要求dp[i][j]，只能有两个方向来推导出来，即dp[i - 1][j] 和 dp[i][j - 1]。
 * @key 所以，dp[i][j] = dp[i - 1][j] + dp[i][j - 1]，因为dp[i][j]只有这两个方向过来。
 * @complexity 时间复杂度：O(m × n)  空间复杂度：O(m x n)
 * @label 动态规划 已复习*1
 */
var uniquePaths = function (m, n) {
    // 确定dp数组以及下标的含义 
    // dp[i][j]: 表示从(0, 0)出发，到(i, j)有dp[i][j]条不同的路径
    const dp = Array(m).fill([]);

    // dp数组的初始化
    for (let i = 0; i < m; i++) dp[i][0] = 1;
    for (let j = 0; j < n; j++) dp[0][j] = 1;

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]; // 递推公式
        }
    }

    return dp[m - 1][n - 1];
};


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * @see {@link https://leetcode.cn/problems/unique-paths}
 * @key 想要求dp[i][j]，只能有两个方向来推导出来，即dp[i - 1][j] 和 dp[i][j - 1]。
 * @key 所以，dp[i][j] = dp[i - 1][j] + dp[i][j - 1]，因为dp[i][j]只有这两个方向过来。
 * @complexity 时间复杂度：O(m × n)  空间复杂度：O(m x n)
 * @label 动态规划 已复习*1 滚动数组
 */
var uniquePaths = function (m, n) {
    const dp = Array(n).fill(1);

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] = dp[j] + dp[j - 1];
        }
    }

    return dp[n - 1];
}
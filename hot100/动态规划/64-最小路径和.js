/**
 * @param {number[][]} grid
 * @return {number}
 * @see {@link https://leetcode.cn/problems/minimum-path-sum}
 * @label 动态规划
 */
var minPathSum = function (grid) {
    const m = grid.length, n = grid[0].length;
    const dp = Array(n);

    dp[0] = grid[0][0];
    for (let j = 1; j < n; j++) dp[j] = grid[0][j] + dp[j - 1];

    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (j === 0) {
                dp[j] = dp[j] + grid[i][j];
            } else {
                dp[j] = Math.min(dp[j - 1], dp[j]) + grid[i][j];
            }
        }
    }

    return dp[n - 1];
};
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 * @see {@link https://leetcode.cn/problems/unique-paths-ii/}
 * @see {@link https://programmercarl.com/0063.%E4%B8%8D%E5%90%8C%E8%B7%AF%E5%BE%84II.html}
 * @key 62.不同路径中我们已经详细分析了没有障碍的情况，有障碍的话，其实就是标记对应的dp table（dp数组）保持初始值(0)就可以了。
 * @complexity 时间复杂度：O(m × n)  空间复杂度：O(m x n)
 * @label 动态规划
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    const dp = Array(m).fill().map(() => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0] === 1) break;
        dp[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        if (obstacleGrid[0][j] === 1) break;
        dp[0][j] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = obstacleGrid[i][j] ? 0 : dp[i][j - 1] + dp[i - 1][j];
        }
    }

    return dp[m - 1][n - 1];
};
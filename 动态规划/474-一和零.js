/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 * @see {@link https://leetcode.cn/problems/ones-and-zeroes/}
 * @see {@link https://programmercarl.com/0474.%E4%B8%80%E5%92%8C%E9%9B%B6.html}
 * @key 这题的关键在于01背包也可以是一个三维数组（但由于使用了滚动数组，所以是二维数组），与之前的不太一样
 * @key dp[i][j]指的是要有i个0 j个1最多可以有多少个元素
 * @label 待复习 动态规划 01背包问题 二维 滚动数组
 */
var findMaxForm = function (strs, m, n) {
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    for (const str of strs) {
        let zeroSum = 0, oneSum = 0;
        for (let i = 0; i < str.length; i++) {
            str[i] === '0' ? zeroSum++ : oneSum++;
        }

        for (let i = m; i >= zeroSum; i--) {
            for (let j = n; j >= oneSum; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - zeroSum][j - oneSum] + 1);
            }
        }
    }

    return dp[m][n];
};
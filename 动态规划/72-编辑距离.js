/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * @see {@link https://leetcode.cn/problems/edit-distance/}
 * @see {@link https://www.bilibili.com/video/BV15h411Z7Qd/?spm_id_from=333.337.search-card.all.click&vd_source=a33e569437ddb90e046a9ab727c74b58}
 * @key 主要是理解 dp[i][j]：表示以下标i-1为结尾的字符串word1，和以下标j-1为结尾的字符串word2，最近编辑距离为dp[i][j]
 * @label 动态规划 子序列问题 待复习
 */
var minDistance = function (word1, word2) {
    const dp = Array(word1.length + 1).fill().map(() => Array(word2.length + 1));

    for (let i = 0; i < word1.length + 1; i++)dp[i][0] = i;
    for (let j = 0; j < word2.length + 1; j++)dp[0][j] = j;

    for (let i = 1; i < word1.length + 1; i++) {
        for (let j = 1; j < word2.length + 1; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
            }
        }
    }

    return dp[word1.length][word2.length];
};
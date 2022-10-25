/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * @see {@link https://leetcode.cn/problems/delete-operation-for-two-strings/}
 * @see {@link https://programmercarl.com/0583.%E4%B8%A4%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E5%88%A0%E9%99%A4%E6%93%8D%E4%BD%9C.html#%E6%80%9D%E8%B7%AF}
 * @key dp[i][j]：以i-1为结尾的字符串word1，和以j-1位结尾的字符串word2，想要达到相等，所需要删除元素的最少次数
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
                // 情况一：删word1[i - 1]，最少操作次数为dp[i - 1][j] + 1
                // 情况二：删word2[j - 1]，最少操作次数为dp[i][j - 1] + 1
                // 情况三：同时删word1[i - 1]和word2[j - 1]，操作的最少次数为dp[i - 1][j - 1] + 2
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 2);
            }
        }
    }

    return dp[word1.length][word2.length];
};


/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * @see {@link https://leetcode.cn/problems/delete-operation-for-two-strings/}
 * @see {@link https://programmercarl.com/0583.%E4%B8%A4%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E5%88%A0%E9%99%A4%E6%93%8D%E4%BD%9C.html#%E6%80%9D%E8%B7%AF}
 * @key 本题和动态规划：1143.最长公共子序列基本相同，只要求出两个字符串的最长公共子序列长度即可，那么除了最长公共子序列之外的字符都是必须删除的，最后用两个字符串的总长度减去两个最长公共子序列的长度就是删除的最少步数。
 * @label 动态规划 子序列问题 待复习
 */
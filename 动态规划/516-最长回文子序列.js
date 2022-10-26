/**
 * @param {string} s
 * @return {number}
 * @see {@link https://leetcode.cn/problems/longest-palindromic-subsequence/}
 * @see {@link https://programmercarl.com/0516.%E6%9C%80%E9%95%BF%E5%9B%9E%E6%96%87%E5%AD%90%E5%BA%8F%E5%88%97.html#%E6%80%9D%E8%B7%AF}
 * @key dp[i][j]：字符串s在[i, j]范围内最长的回文子序列的长度为dp[i][j]
 * @key 此题可以跟647-回文子串对比着来看
 * @label 动态规划 子序列问题
 */
var longestPalindromeSubseq = function (s) {
    const dp = Array(s.length).fill().map(() => Array(s.length).fill(0));

    for (let i = 0; i < s.length; i++) dp[i][i] = 1; // 这里要对dp[i][i]做初始化，因为如果不做的话，循环的时候会取到dp[i+1][i]这样的值，在循环中去处理会很麻烦。所以直接在这里做初始化

    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < s.length; j++) { // 这里一开始写的是 j = i，但是循环的时候会取到dp[i+1][i]这样的值，在循环中去处理会很麻烦。所以这里是j=i+1 ,而dp[i][i]就在上面已经初始化了
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[0][s.length - 1];
};
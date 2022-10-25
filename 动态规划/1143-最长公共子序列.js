/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 * @see {@link https://leetcode.cn/problems/longest-common-subsequence}
 * @see {@link https://programmercarl.com/1143.%E6%9C%80%E9%95%BF%E5%85%AC%E5%85%B1%E5%AD%90%E5%BA%8F%E5%88%97.html}
 * @key dp[i][j]：长度为[i - 1]的字符串text1与长度为[j - 1]的字符串text2的最长公共子序列为dp[i][j]
 * @key 因为如果是dp[i][j]：长度为[i]的字符串text1与长度为[j]的字符串text2的最长公共子序列为dp[i][j]的话，初始化会比较复杂（可以试下）
 * @label 动态规划 子序列问题 待复习
 */
var longestCommonSubsequence = function (text1, text2) {
    const dp = Array(text1.length + 1).fill().map(() => Array(text2.length + 1).fill(0));

    for (let i = 1; i < text1.length + 1; i++) {
        for (let j = 1; j < text2.length + 1; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                // 这里一开始写成了dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + 1
                // 不能这么写，这么写属于没想明白，因为dp[i - 1][j] dp[i][j - 1] 是属于已经比较过了 i-2与j-1 i-1与j-2 这两个与dp[i][j]没有递推的关系，真正有关系的是dp[i-1][j-1]
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                //  当前两个字符不等，text1[i-1]!=text2[j-1]的话，那么长度最少也是dp[i-1][j-1]，但这还不够，因为我们希望拿到之前的比较中尽可能大的长度。那么当前字符已经不相等的情况下，就应该把当前的字符也放入到之前的比较中，那么一定有dp[i][j-1]和dp[i-1][j]>=dp[i][j]。简单来说，dp[i][j]的值应该从dp[i-1][j-1],dp[i][j-1],dp[i-1][j]三者中取，但dp[i][j]≤另外两个，故比较另外两个，取较大的。
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[text1.length][text2.length];
};

console.log(longestCommonSubsequence([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2]));
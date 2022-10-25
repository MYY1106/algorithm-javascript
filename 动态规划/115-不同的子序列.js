/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 * @see {@link https://leetcode.cn/problems/distinct-subsequences/}
 * @see {@link https://programmercarl.com/0115.%E4%B8%8D%E5%90%8C%E7%9A%84%E5%AD%90%E5%BA%8F%E5%88%97.html}
 * @key dp[i][j]：以i-1为结尾的s子序列中出现以j-1为结尾的t的个数为dp[i][j]
 * @label 动态规划 子序列问题 待复习
 */
var numDistinct = function (s, t) {
    const dp = Array(s.length + 1).fill().map(() => Array(t.length + 1).fill(0));

    // dp[i][0]就是t为"" s的长度为i，那么个数肯定为1
    // 同时要注意 dp[0][0]为1，因为 t为"" s为""，个数肯定为1 
    for (let i = 0; i < s.length + 1; i++) dp[i][0] = 1;

    for (let i = 1; i < s.length + 1; i++) {
        for (let j = 1; j < t.length + 1; j++) {
            if (s[i - 1] === t[j - 1]) {
                // 为什么这里有dp[i-1][j]
                //例如： s：bagg 和 t：bag ，s[3] 和 t[2]是相同的，但是字符串s也可以不用s[3]来匹配，即用s[0]s[1]s[2]组成的bag，所以对应过来，这里应该是取dp[i-1][j]
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            } else {
                // 注意，这里不是dp[i][j-1]
                // 因为例如： s：bagg 和 t：bag ，s[3] 和 t[2]是相同的，但是字符串s也可以不用s[3]来匹配，即用s[0]s[1]s[2]组成的bag，所以对应过来，这里应该是取dp[i-1][j]
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[s.length][t.length];
};

console.log(numDistinct("rabbbit", "rabbit"));
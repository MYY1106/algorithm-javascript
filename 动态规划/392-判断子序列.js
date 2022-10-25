/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (t.length === 0 && s.length === 0) return true
    if (t.length === 0) return false

    const dp = [];
    let j = 0;

    if (s[j] === t[0]) {
        dp[0] = 1;
        j++;
    } else {
        dp[0] = 0;
    }

    for (let i = 1; i < t.length; i++) {
        if (s[j] === t[i]) {
            dp[i] = dp[i - 1] + 1;
            j++;
        } else {
            dp[i] = dp[i - 1];
        }

        if (j === s.length) return true;
    }

    return false;
};


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @see {@link https://leetcode.cn/problems/is-subsequence/}
 * @see {@link https://programmercarl.com/0392.%E5%88%A4%E6%96%AD%E5%AD%90%E5%BA%8F%E5%88%97.html#%E6%80%9D%E8%B7%AF}
 * @label 动态规划 子序列问题
 */
var isSubsequence = function (s, t) {
    const dp = Array(s.length + 1).fill().map(() => Array(t.length + 1).fill(0));

    for (let i = 1; i < s.length + 1; i++) {
        for (let j = 1; j < t.length + 1; j++) {
            dp[i][j] = s[i - 1] === t[j - 1] ? dp[i - 1][j - 1] + 1 : dp[i][j - 1];
        }
    }

    return dp[s.length][t.length] === s.length ? true : false;
};
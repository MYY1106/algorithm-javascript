/**
 * @param {string} s
 * @return {number}
 * @see {@link https://leetcode.cn/problems/palindromic-substrings/}
 * @see {@link https://programmercarl.com/0647.%E5%9B%9E%E6%96%87%E5%AD%90%E4%B8%B2.html}
 * @label 动态规划 子序列问题
 */
var countSubstrings = function (s) {
    const dp = Array(s.length).fill().map(() => Array(s.length));
    let result = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i; j < s.length; j++) {
            if (s[i] === s[j]) {
                if (i === j) {
                    dp[i][j] = true;
                    result++;
                } else if (Math.abs(i - j) === 1) {
                    dp[i][j] = true;
                    result++;
                } else if (dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                    result++;
                }
            } else {
                dp[i][j] = false;
            }
        }
    }

    return result;
};

console.log(countSubstrings("aaa"));
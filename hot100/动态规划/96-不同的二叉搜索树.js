/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    const dp = [1, 1];

    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] = (dp[i] ?? 0) + dp[j] * dp[i - 1 - j];
        }
    }

    return dp[n];
};
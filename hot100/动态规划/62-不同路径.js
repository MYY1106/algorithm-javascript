/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const dp = Array(n).fill(1);
console.log(dp);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            console.log(dp);
            dp[j] = dp[j] + dp[j - 1];
        }
    }
    console.log(dp);
    return dp[n - 1];
}

console.log(uniquePaths(3, 7));
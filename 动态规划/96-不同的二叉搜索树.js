/**
 * @param {number} n
 * @return {number}
 * @see {@link https://leetcode.cn/problems/unique-binary-search-trees}
 * @see {@link https://programmercarl.com/0096.%E4%B8%8D%E5%90%8C%E7%9A%84%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91.html}
 * @see {@link https://leetcode.cn/problems/unique-binary-search-trees/solution/hua-jie-suan-fa-96-bu-tong-de-er-cha-sou-suo-shu-b/}
 * @label 待复习 动态规划 卡特兰数公式
 */
var numTrees = function (n) {
    const dp = [1, 1];

    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] = dp[i] ? dp[i] + dp[j] * dp[i - j - 1] : dp[j] * dp[i - j - 1];
        }
    }

    return dp[n];
};

console.log(numTrees(3));
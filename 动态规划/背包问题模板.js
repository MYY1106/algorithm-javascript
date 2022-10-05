/**
 * @param {number[]} weight
 * @param {number[]} value
 * @param {number} size
 * @return {number}
 * @see {@link https://programmercarl.com/%E8%83%8C%E5%8C%85%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%8001%E8%83%8C%E5%8C%85-1.html}
 * @label 动态规划 01背包问题 模板
 */
var WeightBagProblem = (weight, value, size) => {
    const dp = Array(weight.length).fill().map(() => Array(size + 1).fill(0));

    for (let j = weight[0]; j <= size; j++) {
        dp[0][j] = value[0];
    }

    for (let i = 1; i < weight.length; i++) {
        for (let j = 1; j <= size; j++) {
            dp[i][j] = j > weight[i] ? Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]) : dp[i - 1][j];
        }
    }

    return dp[weight.length - 1][size]
}

/**
 * @param {number[]} weight
 * @param {number[]} value
 * @param {number} size
 * @return {number}
 * @see {@link https://programmercarl.com/%E8%83%8C%E5%8C%85%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%8001%E8%83%8C%E5%8C%85-1.html}
 * @label 动态规划 01背包问题 滚动数组模板
 */
var WeightBagProblem = (weight, value, size) => {
    const dp = Array(size + 1).fill(0);

    // 是否需要初始化视情况而定
    for (let i = weight[0]; i <= size; i++) {
        dp[i] = value[0];
    }

    for (let i = 1; i < weight.length; i++) {
        for (let j = size; j >= weight[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
        }
    }

    return dp[size]
}

console.log(WeightBagProblem([2, 3, 4, 5, 7, 8, 9], [15, 2, 33, 40, 20, 30, 55], 20));
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
 * @label 动态规划 01背包问题 滚动数组 模板
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


/**
 * @param {number[]} weight
 * @param {number[]} value
 * @param {number} size
 * @return {number}
 * @see {@link https://programmercarl.com/%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%98%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80%E5%AE%8C%E5%85%A8%E8%83%8C%E5%8C%85.html}
 * @key 如果是问装满背包有几种方式的话，那么for循环顺序得到的结果是不一样的，如果求组合数就是外层for循环遍历物品，内层for遍历背包
 * @label 动态规划 完全背包问题 滚动数组 模板
 */
var WeightBagProblem = (weight, value, size) => {
    const dp = Array(size + 1).fill(0);

    // 是否需要初始化视情况而定
    for (let i = weight[0]; i <= size; i++) {
        dp[i] = value[0];
    }

    for (let i = 1; i < weight.length; i++) {
        // 与01背包不同的就是在这里
        // 如果是从前往后遍历的话，就可以使用多次某个物品，可以手写下dp数组就明白了
        for (let j = weight[i]; j <= size; j++) {
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
        }
    }

    return dp[size]
}


/**
 * @param {number[]} weight
 * @param {number[]} value
 * @param {number} size
 * @return {number}
 * @see {@link https://programmercarl.com/%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%98%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80%E5%AE%8C%E5%85%A8%E8%83%8C%E5%8C%85.html}
 * @label 动态规划 完全背包问题 滚动数组 模板
 * @key 如果是问装满背包有几种方式的话，那么for循环顺序得到的结果是不一样的，如果求排列数就是外层for遍历背包，内层for循环遍历物品
 */
var WeightBagProblem = (weight, value, size) => {
    const dp = Array(size + 1).fill(0);

    // 是否需要初始化视情况而定
    for (let i = weight[0]; i <= size; i++) {
        dp[i] = value[0];
    }

    for (let j = 0; j <= size; j++) {
        // 与01背包不同的就是在这里
        // 如果是从前往后遍历的话，就可以使用多次某个物品，可以手写下dp数组就明白了
        for (let i = 0; i < weight.length; i++) {
            if (j >= weight[i]) {
                dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
            }
        }
    }

    return dp[size]
}


console.log(WeightBagProblem([2, 4, 7, 8, 9], [15, 40, 20, 30, 55], 10));
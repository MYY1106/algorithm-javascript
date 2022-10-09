/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 * @see {@link https://leetcode.cn/problems/coin-change-2}
 * @see {@link https://programmercarl.com/0518.%E9%9B%B6%E9%92%B1%E5%85%91%E6%8D%A2II.html#%E6%80%9D%E8%B7%AF}
 * @key 求装满背包有几种方法类似的题目，递推公式基本都是这样的
 * @key 如果求组合数就是外层for循环遍历物品，内层for遍历背包
 * @label 动态规划 完全背包 待复习
 */
var change = function (amount, coins) {
    const dp = Array(amount + 1).fill(0);
    dp[0] = 1; // 因为0元可以用0枚硬币凑成，也是一种方法

    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j < amount + 1; j++) {
            dp[j] += dp[j - coins[i]]; // 这里一开始不太理解为什么可以这么写，因为新的dp[j]等于原先的dp[j]+dp[j-减去目前的硬币钱数]，自己手写下dp数组就明白为什么了
        }
    }

    return dp[amount];
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @see {@link https://leetcode.cn/problems/target-sum}
 * @see {@link https://programmercarl.com/0494.%E7%9B%AE%E6%A0%87%E5%92%8C.html}
 * @key 这题的关键在于能够推出 left = (target + sum) / 2 和 dp[j]表示什么
 * @label 待复习 动态规划 01背包问题
 */
var findTargetSumWays = function (nums, target) {
    const sum = nums.reduce((prev, num) => prev + num, 0);

    if ((target + sum) % 2) return 0;
    if (Math.abs(target) > sum) return 0; // target的绝对值已经大于sum，那么也是没有方案的

    const maxBagWeight = (target + sum) / 2;
    const dp = Array(maxBagWeight + 1).fill(0);
    dp[0] = 1; // 这里的初始化应该是让dp[0] = 1

    for (let i = 0; i < nums.length; i++) { // 注意这里的i是从0开始的
        for (let j = maxBagWeight; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]];
        }
    }

    return dp[maxBagWeight];
};

console.log(findTargetSumWays([1, 2, 3, 4, 5, 6], 3));
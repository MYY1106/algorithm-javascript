/**
 * @param {number[]} nums
 * @return {boolean}
 * @see {@link https://leetcode.cn/problems/partition-equal-subset-sum/}
 * @see {@link https://programmercarl.com/0416.%E5%88%86%E5%89%B2%E7%AD%89%E5%92%8C%E5%AD%90%E9%9B%86.html#_01%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%98}
 * @label 待复习 动态规划 01背包问题
 */
var canPartition = function (nums) {
    const sum = nums.reduce((prev, num) => prev + num, 0);

    if (sum % 2) return false;

    const dp = Array(sum / 2 + 1).fill(0);

    for (let i = 0; i < nums.length; i++) {
        for (let j = sum / 2; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);

            if (j === sum / 2 && dp[j] === sum / 2) return true; // 每次j === sum / 2时，都先判断下是否是否达到sum/2，如果达到了就直接返回
        }
    }

    return false;
};
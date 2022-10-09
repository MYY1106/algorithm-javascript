/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @see {@link https://leetcode.cn/problems/combination-sum-iv}
 * @see {@link https://programmercarl.com/0377.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C%E2%85%A3.html}
 * @key 如果求排列数就是外层for遍历背包，内层for循环遍历物品
 * @label 动态规划 完全背包 待复习
 */
var combinationSum4 = function (nums, target) {
    const dp = Array(target + 1).fill(0);
    dp[0] = 1;

    for (let i = 0; i <= target; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i >= nums[j]) {
                dp[i] += dp[i - nums[j]];
            }
        }
    }

    return dp[target];
};

console.log(combinationSum4([1, 2, 3], 4));
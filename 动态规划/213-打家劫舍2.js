/**
 * @param {number[]} nums
 * @return {number}
 * @see {@link https://leetcode.cn/problems/house-robber-ii/}
 * @see {@link https://programmercarl.com/0213.%E6%89%93%E5%AE%B6%E5%8A%AB%E8%88%8DII.html}
 * @key dp[i]: 考虑下标i（包括i）以内的房屋，最多可以偷窃的金额
 * @key 这道题与198的区别是这里的房屋围成一个环，我们可以分成两种情况去计算：考虑头元素不考虑尾元素得到的最大值 和 不考虑头元素考虑尾元素得到的最大值
 * @label 动态规划 打家劫舍
 */
var rob = function (nums) {
    if (nums.length == 0) return 0;
    if (nums.length === 1) return nums[0];

    return Math.max(robRange(nums.slice(1)), robRange(nums.slice(0, nums.length - 1)));

    function robRange (nums) {
        if (nums.length == 0) return 0;
        if (nums.length === 1) return nums[0];

        const dp = Array(nums);
        // 从递推公式 dp[i] = max(dp[i - 2] + nums[i], dp[i - 1]) 可以看出，递推公式的基础就是dp[0] 和 dp[1]
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        for (let i = 2; i < nums.length; i++) {
            dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]); // 如果偷第i家的，则偷到的金额为dp[i - 2] + nums[i]，如果不偷第i家，则偷到的金额为dp[i - 1]
        }

        return dp[nums.length - 1];
    };
};
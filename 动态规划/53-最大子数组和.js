/**
 * @param {number[]} nums
 * @return {number}
 * @see{@link https://leetcode.cn/problems/maximum-subarray}
 * @label 已复习*1
 */
var maxSubArray = function (nums) {
    const dp = Array(nums.length);
    let result = nums[0];
    dp[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]); // 对于dp[i]来说，只能由两个方向推出它，要么加上前面的，要么从它重新开始一个新的子序列
        if (dp[i] > result) result = dp[i];
    }

    return result; // 这里不能是dp[dp.length - 1]，因为dp[dp.length - 1]不一定是最大的
};


/**
 * @param {number[]} nums
 * @return {number}
 * @see{@link https://leetcode.cn/problems/maximum-subarray}
 */
var maxSubArray = function (nums) {
    let dp = nums[0];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        dp = Math.max(dp + nums[i], nums[i]);
        if (dp > max) max = dp;
    }

    return max;
}
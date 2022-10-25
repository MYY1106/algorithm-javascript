/**
 * @param {number[]} nums
 * @return {number}
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

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
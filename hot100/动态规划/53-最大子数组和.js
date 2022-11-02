/**
 * @param {number[]} nums
 * @return {number}
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
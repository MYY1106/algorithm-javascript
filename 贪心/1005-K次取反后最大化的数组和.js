/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @see {@link https://leetcode.cn/problems/maximize-sum-of-array-after-k-negations}
 * @label 贪心
 */
var largestSumAfterKNegations = function (nums, k) {
    const len = len;

    nums.sort((a, b) => Math.abs(b) - Math.abs(a)); // 根据绝对值从大到小排列

    for (let i = 0; i < nums.length && k > 0; i++) {
        if (nums[i] < 0) {
            nums[i] = -nums[i];
            k--;
        }
    }

    nums[len] = k % 2 ? -nums[len] : nums[len];

    return nums.reduce((prev, num) => prev + num);
};
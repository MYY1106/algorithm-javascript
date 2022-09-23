/**
 * @param {number[]} nums
 * @return {number}
 * @see {@link https://leetcode.cn/problems/wiggle-subsequence/}
 * @see {@link https://programmercarl.com/0376.%E6%91%86%E5%8A%A8%E5%BA%8F%E5%88%97.html}
 * @label 贪心 序列 待复习
 */
var wiggleMaxLength = function (nums) {
    let preDiff = 0;
    let curDiff = 0;
    let result = 1; // 这里得从1开始

    for (let i = 0; i < nums.length - 1; i++) {
        curDiff = nums[i + 1] - nums[i];
        if ((curDiff < 0 && preDiff >= 0) || (curDiff > 0 && preDiff <= 0)) { // 这里的条件需要注意，preDiff是可以等于0的，具体可以带入 [2,3,3,3,2,5] 推下过程
            result++;
            preDiff = curDiff;
        }
    }

    return result;
};
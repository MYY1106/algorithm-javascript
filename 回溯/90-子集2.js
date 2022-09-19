/**
 * @param {number[]} nums
 * @return {number[][]}
 * @see {@link https://leetcode.cn/problems/subsets-ii/}
 * @label 回溯 子集
 */
var subsetsWithDup = function (nums) {
    const path = [];
    const result = [];

    backTracking(nums.sort(), 0);

    return result;

    function backTracking (nums, start) {
        result.push([...path]);

        if (path.length >= nums.length) return;

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue; // 去重：如果nums[i]与nums[i - 1]相等，就跳过，不然会造成出现[1,2]两次

            path.push(nums[i]);
            backTracking(nums, i + 1);
            path.pop();
        }
    }
};

subsetsWithDup([1, 2, 2])
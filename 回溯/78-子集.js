/**
 * @param {number[]} nums
 * @return {number[][]}
 * @see {@link https://leetcode.cn/problems/subsets}
 * @label 回溯 子集 模板
 */
var subsets = function (nums) {
    const result = [];
    const path = [];

    backTracking(0);
    return result;


    function backTracking (start) {
        result.push([...path])

        // if (start >= nums.length) return; // 可以不用写 下面的循环终止条件已经有了这个条件了

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backTracking(i + 1);
            path.pop();
        }
    }
};
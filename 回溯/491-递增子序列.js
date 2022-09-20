/**
 * @param {number[]} nums
 * @return {number[][]}
 * @see {@link https://leetcode.cn/problems/increasing-subsequences/}
 * @see {@link https://programmercarl.com/0491.%E9%80%92%E5%A2%9E%E5%AD%90%E5%BA%8F%E5%88%97.html}
 * @key 其实本题关键在于理解题目意思
 * @key 比如[4,7,6,7]，需要返回[[4,7],[4,7,7],[4,6],[4,6,7],[7,7],[6,7]]，这里一开始我以为不能返回[4,6,7]
 * @label 回溯 子集
 */
var findSubsequences = function (nums) {
    const path = [];
    const result = [];

    backTracking(nums, 0);

    return result;

    function backTracking (nums, start) {
        if (path.length >= 2) result.push([...path]);

        const set = new Set(); // 这里记录下哪些元素已经用过

        for (let i = start; i < nums.length; i++) {
            if (nums[i] < path[path.length - 1] || set.has(nums[i])) continue;

            set.add(nums[i]);
            path.push(nums[i]);
            backTracking(nums, i + 1);
            path.pop();
        }
    }
};
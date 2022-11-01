/**
 * @param {number[]} nums
 * @return {number[][]}
 * @see {@link https://leetcode.cn/problems/permutations/}
 * @see {@link https://programmercarl.com/0046.%E5%85%A8%E6%8E%92%E5%88%97.html}
 * @key 用一个used数组去记录使用过的元素即可
 * @label 回溯 排列 模板 已复习*1
 */
var permute = function (nums) {
    const result = [];
    const path = [];
    const used = [];

    backTracking();

    return result;

    function backTracking () {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            used[i] = true;
            path.push(nums[i]);
            backTracking();
            path.pop();
            used[i] = false;
        }
    }
};
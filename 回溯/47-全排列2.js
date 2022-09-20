/**
 * @param {number[]} nums
 * @return {number[][]}
 * @see {@link https://leetcode.cn/problems/permutations/}
 * @label 回溯 排列 待复习
 */
var permuteUnique = function (nums) {
    const result = [];
    const path = [];
    const used = [];

    backTracking(nums.sort());

    return result;

    function backTracking (nums) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            // 这里是关键
            // 为什么要这么写呢，因为如果是前一个元素被用过了，说明是上一层用了这个元素，所以这次可以用
            // 但是如果前一个元素没有被用过，说明同一层中前面的一个循环即将要使用，所以这次就不可以用
            // 具体看这里的图：https://programmercarl.com/0047.%E5%85%A8%E6%8E%92%E5%88%97II.html#%E6%8B%93%E5%B1%95
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

            if (used[i]) continue;

            used[i] = true;
            path.push(nums[i]);
            backTracking(nums);
            path.pop();
            used[i] = false;
        }
    }
};
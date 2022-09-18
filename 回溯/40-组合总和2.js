/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * @see {@link https://leetcode.cn/problems/combination-sum-ii}
 * @label 回溯 组合 剪枝
 */
var combinationSum2 = function (candidates, target) {
    const result = [];
    const path = [];

    const backTracking = (candidates, target, start) => {
        const sum = path.reduce((prev, num) => prev + num, 0);

        if (sum === target) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i - 1] === candidates[i]) continue; // 去重：如果candidates[i]与candidates[i - 1]相等，就跳过，不然会造成1重复组合2次，导致[1,7]出现两次，[1,2,5]也出现两次

            if (sum + candidates[i] > target) break; // 剪枝

            path.push(candidates[i]);
            backTracking(candidates, target, i + 1);
            path.pop();
        }
    }

    backTracking(candidates.sort((a, b) => a - b), target, 0);

    return result;
};

combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
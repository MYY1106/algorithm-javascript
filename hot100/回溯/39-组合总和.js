/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * @see {@link https://leetcode.cn/problems/combination-sum/}
 * @label 回溯 模板 组合 剪枝
 */
var combinationSum = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    const result = [];
    const path = [];

    backTracking(0);
    return result;

    function backTracking (start) {
        const sum = path.reduce((prev, num) => num + prev, 0);

        if (sum === target) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (sum + candidates[i] > target) break;
            path.push(candidates[i]);
            backTracking(i);
            path.pop();
        }
    }
};

console.log(combinationSum([3, 12, 9, 6, 7, 8], 15));
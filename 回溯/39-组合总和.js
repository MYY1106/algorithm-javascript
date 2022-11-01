/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * @see {@link https://leetcode.cn/problems/combination-sum/}
 * @label 回溯 模板 组合 剪枝 已复习*1
 */
var combinationSum = function (candidates, target) {
    const result = [];
    const path = [];

    const backTracking = (candidates, target, start) => {// 这里一开始写错了，想着不用传start，但是这样的话就会出现[2,2,3],[3,2,2],[3,2,3]这种情况，所以必须传start
        const sum = path.reduce((prev, num) => prev + num, 0);

        if (target === sum) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (sum + candidates[i] > target) break; // 剪枝
            path.push(candidates[i]);
            backTracking(candidates, target, i); // 不用i+1了，表示可以重复读取当前的数
            path.pop();
        }
    }

    backTracking(candidates.sort((a, b) => a - b), target, 0);

    return result;
};
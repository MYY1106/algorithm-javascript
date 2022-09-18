/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 * @see {@link https://leetcode.cn/problems/combination-sum-iii}
 * @label 回溯 组合 剪枝
 */
var combinationSum3 = function (k, n) {
    const result = [];
    let path = [];

    const backTracking = (k, n, start) => {
        const sum = path.reduce((pre, num) => pre + num, 0);

        if (path.length === k) {
            if (sum === n) result.push([...path]);
            return;
        }

        if (sum >= n) return; // 如果sum已经大于n了，就没有必要循环了，直接剪枝

        for (let i = start; i <= 9 - k + path.length + 1; i++) { // 这里可以看77-组合.md里面有写到为什么终止条件这么写
            path.push(i);
            backTracking(k, n, i + 1);
            path.pop();
        }
    }

    backTracking(k, n, 1);

    return result;
};
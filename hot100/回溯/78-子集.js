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
        result.push([...path]);

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backTracking(i + 1);
            path.pop();
        }
    }
}


/**
 * @param {number[]} nums
 * @return {number[][]}
 * @see {@link https://leetcode.cn/problems/subsets}
 * @see {@link https://leetcode.cn/problems/subsets/solution/zi-ji-by-leetcode-solution/}
 * @label 位运算 
 */
var subsets = function (nums) {
    const result = [];
    const n = nums.length;

    for (let mask = 0; mask < (1 << n); mask++) {
        const path = [];
        for (let i = 0; i < n; i++) {
            if ((1 << i) & mask) {
                path.push(nums[i]);
            }
        }
        result.push(path);
    }
    return result
}
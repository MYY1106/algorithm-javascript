/**
 * @param {number[]} nums
 * @return {number[][]}
 * @see {@link https://leetcode.cn/problems/permutations/}
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

console.log(permute([1, 2, 3]));
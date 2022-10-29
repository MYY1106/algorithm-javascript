/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * @see {@link https://leetcode.cn/problems/next-permutation}
 * @see {@link https://leetcode.cn/problems/next-permutation/solution/xia-yi-ge-pai-lie-suan-fa-xiang-jie-si-lu-tui-dao-/}
 * @key 
 * @label 待复习
 */
var nextPermutation = function (nums) {
    let small = -1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            small = i;
            break
        };
    }

    if (small === -1) {
        reverse(nums, 0, nums.length - 1);
        return nums;
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > nums[small]) {
            [nums[i], nums[small]] = [nums[small], nums[i]];
            break;
        }
    }

    reverse(nums, small + 1, nums.length - 1);

    return nums

    function reverse (arr, start, end) {
        let left = start, right = end;

        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
};
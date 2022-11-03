/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * @see {@link https://leetcode.cn/problems/sort-colors}
 * @see {@link https://leetcode.cn/problems/sort-colors/solution/75-yan-se-fen-lei-san-lu-kuai-pai-by-din-84w8/}
 * @label 三路快速排序 待复习
 */
var sortColors = function (nums) {
    if (nums.length < 2) {
        return nums;
    }

    let zero = -1, two = nums.length;
    let i = 0;

    while (i < two) {
        if (nums[i] === 0) {
            zero++;
            swap(nums, zero, i);
            i++;
        } else if (nums[i] === 1) {
            i++;
        } else {
            two--;
            swap(nums, two, i);
        }
    }

    function swap (nums, i, j) {
        const tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
};
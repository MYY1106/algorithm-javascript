/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @see {@link https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/}
 * @see {@link https://www.bilibili.com/video/BV1d54y1q7k7?spm_id_from=333.999.0.0&vd_source=a33e569437ddb90e046a9ab727c74b58}
 * @label 待复习*2 蓝红二分法
 */
var searchRange = function (nums, target) {
    let { right: leftBorder } = search(nums, 0, nums.length - 1, (num) => target > num);
    let { left: rightBorder } = search(nums, leftBorder, nums.length - 1, (num) => num <= target);
    return [nums[leftBorder] === target ? leftBorder : -1, nums[rightBorder] === target ? rightBorder : -1];

    function search (nums, start, end, isBlue) {
        let left = start - 1, right = end + 1;
        while (left + 1 !== right) {
            const mid = parseInt((left + right) / 2);
            if (isBlue(nums[mid])) {
                left = mid;
            } else {
                right = mid;
            }
        }

        return { left, right };
    }
};
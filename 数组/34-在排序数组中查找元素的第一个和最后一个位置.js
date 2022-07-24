/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @reference https://www.bilibili.com/video/BV1d54y1q7k7?spm_id_from=333.999.0.0&vd_source=a33e569437ddb90e046a9ab727c74b58
 * @result 88 / 88 个通过测试用例  状态：通过  执行用时: 64 ms  内存消耗: 41.3 MB
 */
var searchRange = function (nums, target) {
    const { right: leftBorder } = search(nums, target, 0, nums.length - 1, (num, target) => num < target)

    if (nums[leftBorder] !== target) return [-1, -1] // 若不等于，说明数组中并没有target，直接返回即可

    const { left: rightBorder } = search(nums, target, leftBorder, nums.length - 1, (num, target) => num <= target) // 做了一个小小的优化，直接查找[leftBorder, nums.length - 1]之间即可，无需查找[0, nums.length - 1]

    return [leftBorder, rightBorder]

    /**
     * @description 判断函数
     * @param {*} nums 数组
     * @param {*} target 目标
     * @param {*} start 查找范围的第一个元素下标
     * @param {*} end 查找范围的最后一个元素下标
     * @param {*} condition 判断条件函数
     */
    function search (nums, target, start, end, condition) {
        let left = start - 1, right = end + 1;
        while (left + 1 !== right) {
            const mid = Math.floor((left + right) / 2)
            if (condition(nums[mid], target)) {
                left = mid;
            } else {
                right = mid;
            }
        }
        return { left, right }
    }
};
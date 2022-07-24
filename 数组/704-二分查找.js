/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @result 47 / 47 个通过测试用例  状态：通过  执行用时: 72 ms  内存消耗: 43.9 MB
 */
var search = function (nums, target) {
    let low = 0, high = nums.length - 1;
    while (low <= high) {
        const mid = parseInt((low + high) / 2)
        if (nums[mid] === target) {
            return mid
        }
        else if (target < nums[mid]) {
            high = mid - 1
        }
        else {
            low = mid + 1
        }
    }
    return -1
};
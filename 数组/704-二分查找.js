/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
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
/**
 * @param {number[]} nums
 * @return {number[]}
 * @method 双指针
 */
var sortedSquares = function (nums) {
    let left = 0, right = nums.length - 1;
    const newNums = [];
    while (left <= right) {
        if (nums[left] ** 2 < nums[right] ** 2) {
            newNums.unshift(nums[right] ** 2);
            right--;
        } else {
            newNums.unshift(nums[left] ** 2);
            left++;
        }
    }
    return newNums
};
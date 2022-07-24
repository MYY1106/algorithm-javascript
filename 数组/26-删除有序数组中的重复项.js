/**
 * @param {number[]} nums
 * @return {number}
 * @method 双指针
 * @ref 参考27-移除元素的写法
 */
var removeDuplicates = function (nums) {
    let left = 0, value;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== value) {
            value = nums[right];
            nums[left] = nums[right];
            left++;
        }
    }
    return left;
};
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * @method 双指针
 */
var removeElement = function (nums, val) {
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== val) {
            nums[left] = nums[right];
            left++;
        }
    }
    return left;
};



/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * @method 双指针优化（前后夹击）
 */
var removeElement = function (nums, val) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        if (nums[left] === val) {
            nums[left] = nums[right]
            right--;
        } else {
            left++;
        }
    }
    return right + 1;
};
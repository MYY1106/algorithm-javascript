/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let rightMost = 0;

    for (let i = 0; i < nums.length; i++) {
        if (rightMost < i) return false;
        rightMost = Math.max(rightMost, i + nums[i]);
        if (rightMost >= nums.length - 1) return true
    }

    return false;
};

console.log(canJump([0]));
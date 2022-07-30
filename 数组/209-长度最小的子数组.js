/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * @method 滑动窗口法
 * @ref https://www.bilibili.com/video/BV14Q4y1P7Np?spm_id_from=333.337.search-card.all.click&vd_source=a33e569437ddb90e046a9ab727c74b58
 */
var minSubArrayLen = function (target, nums) {
    let len = Infinity;
    let left = 0, right = 0, sum = 0;
    while (right < nums.length) {
        sum += nums[right++];
        while (sum >= target) {
            len = right - left < len ? right - left : len;
            sum -= nums[left++]
        }
    }
    return len === Infinity ? 0 : len;
};

console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
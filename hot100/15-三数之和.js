/**
 * @param {number[]} nums
 * @return {number[][]}
 * @see {@link https://leetcode.cn/problems/3sum}
 * @see {@link https://leetcode.cn/problems/3sum/solution/3sumpai-xu-shuang-zhi-zhen-yi-dong-by-jyd/} 
 * @label 排序 双指针 待复习
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            if (nums[i] + nums[left] + nums[right] === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                do { left++ } while (left < right && nums[left] === nums[left - 1]);
                do { right-- } while (left < right && nums[right] === nums[right + 1]);
            } else if (nums[i] + nums[left] + nums[right] > 0) {
                do { right-- } while (left < right && nums[right] === nums[right + 1]);
            } else {
                do { left++ } while (left < right && nums[left] === nums[left - 1]);
            }
        }

    }

    return result;
};
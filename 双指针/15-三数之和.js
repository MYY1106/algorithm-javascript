/**
 * @param {number[]} nums
 * @return {number[][]}
 * @see {@link https://leetcode.cn/problems/3sum}
 * @see {@link https://leetcode.cn/problems/3sum/solution/3sumpai-xu-shuang-zhi-zhen-yi-dong-by-jyd/} 
 * @label 排序 双指针 待复习*2 已复习*1
 */
var threeSum = function (nums) {
    const record = []
    let left, right
    nums = nums.sort((a, b) => a - b) // 一定注意这里的排序，默认排序顺序是在将元素转换为字符串，然后比较它们的 UTF-16 代码单元值序列时构建的

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break; // 如果num[i]已经大于0了，则nums[i] + nums[left] + nums[right]必将大于0

        // 跳过，因为已经将 nums[k - 1] 的所有组合加入到结果中，本次双指针搜索只会得到重复组合
        // 这里的条件也不能写成nums[i] === nums[i - 1]，可以想下，很好理解 
        if (i > 0 && nums[i] === nums[i - 1]) continue

        left = i + 1;
        right = nums.length - 1;

        while (left < right) {
            if (nums[i] + nums[left] + nums[right] === 0) {
                record.push([nums[i], nums[left], nums[right]])
                do {
                    left++
                } while (left < right && nums[left - 1] === nums[left]) // 这里的条件也不能写成nums[left + 1] === nums[left]，可以想下，很好理解 
                do {
                    right--
                } while (left < right && nums[right + 1] === nums[right]) // 这里的条件也不能写成nums[right - 1] === nums[right]，可以想下，很好理解 
            }
            else if (nums[i] + nums[left] + nums[right] > 0) {
                do {
                    right--
                } while (left < right && nums[right + 1] === nums[right]) // 这里的条件也不能写成nums[right - 1] === nums[right]，可以想下，很好理解 
            }
            else {
                do {
                    left++
                } while (left < right && nums[left - 1] === nums[left]) // 这里的条件也不能写成nums[left + 1] === nums[left]，可以想下，很好理解 
            }
        }
    }
    return record
};

console.log(threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]));
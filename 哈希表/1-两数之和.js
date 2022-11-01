/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @method 哈希表Map
 * @see {@link https://leetcode.cn/problems/two-sum}
 * @label 已复习*1
 */
var twoSum = function (nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i)
    }
    console.log(map);
    for (let i = 0; i < nums.length; i++) {
        const restKey = map.get(target - nums[i])
        if (restKey && restKey != i) {
            return [i, map.get(target - nums[i])]
        }
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @method 哈希表优化
 * @see {@link https://leetcode.cn/problems/two-sum}
 */
var twoSum = function (nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [i, map.get(target - nums[i])]
        }
        map.set(nums[i], i)
    }
};
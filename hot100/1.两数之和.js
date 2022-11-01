/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
var twoSum = (nums, target) => {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i];
        if (map.has(need)) {
            return [map.get(need), i];
        } else {
            map.set(nums[i], i);
        }
    }
}
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const set1 = new Set(nums1), resSet = new Set();
    for (let i = 0; i < nums2.length; i++)
        set1.has(nums2[i]) && resSet.add(nums2[i])
    return Array.from(resSet)
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
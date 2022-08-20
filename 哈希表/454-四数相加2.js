/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 * @method 哈希
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    const map = new Map()
    let count = 0

    for (const n1 of nums1) {
        for (const n2 of nums2) {
            map.set(n1 + n2, (map.get(n1 + n2) || 0) + 1)
        }
    }

    for (const n3 of nums3) {
        for (const n4 of nums4) {
            count += (map.get(0 - n3 - n4) || 0)
        }
    }

    return count
};

console.log(fourSumCount([-1, -1],
    [-1, 1],
    [-1, 1],
    [1, -1])
);
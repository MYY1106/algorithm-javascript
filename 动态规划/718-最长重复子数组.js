/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
    const dp = Array(nums1.length).fill().map(() => Array(nums2.length).fill(0))
    
    for (let i = 0; i < nums1.length; i++){
        for (let j = 0; j < nums2.length; j++){
            if (nums1[i] === nums2[j]) {
                dp[i][j] = dp[i][]
            }
        }
    }
};

console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]));
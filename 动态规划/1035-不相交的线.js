/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @see {@link https://leetcode.cn/problems/uncrossed-lines}
 * @return {number}
 * @key 此题的关键在分析出真正要求的是什么
 * @key 直线不能相交，这就是说明在字符串A中 找到一个与字符串B相同的子序列，且这个子序列不能改变相对顺序，只要相对顺序不改变，链接相同数字的直线就不会相交
 * @key 那么其实就是求两个字符串的最长公共子序列的长度！与1143-最长公共子序列是一模一样的的
 */
var maxUncrossedLines = function (nums1, nums2) {
    const dp = Array(nums1.length + 1).fill().map(() => Array(nums2.length + 1).fill(0));

    for (let i = 1; i < nums1.length + 1; i++) {
        for (let j = 1; j < nums2.length + 1; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                // 这里一开始写成了dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + 1
                // 不能这么写，这么写属于没想明白，因为dp[i - 1][j] dp[i][j - 1] 是属于已经比较过了 i-2与j-1 i-1与j-2 这两个与dp[i][j]没有递推的关系，真正有关系的是dp[i-1][j-1]
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                //  当前两个字符不等，text1[i-1]!=nums2[j-1]的话，那么长度最少也是dp[i-1][j-1]，但这还不够，因为我们希望拿到之前的比较中尽可能大的长度。那么当前字符已经不相等的情况下，就应该把当前的字符也放入到之前的比较中，那么一定有dp[i][j-1]和dp[i-1][j]>=dp[i][j]。简单来说，dp[i][j]的值应该从dp[i-1][j-1],dp[i][j-1],dp[i-1][j]三者中取，但dp[i][j]≤另外两个，故比较另外两个，取较大的。
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[nums1.length][nums2.length];
};
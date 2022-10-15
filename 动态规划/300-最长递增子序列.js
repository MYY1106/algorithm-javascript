/**
 * @param {number[]} nums
 * @return {number}
 * @see {@link https://leetcode.cn/problems/longest-increasing-subsequence}
 * @see {@link https://github.com/sl1673495/leetcode-javascript/issues/83}
 * @key 从前往后求解，对于每个值 i，都需要从 j = 0 ~ i 依次求解
 * @key 只要 nums[i] > nums[j]，就说明 [nums[j], nums[i]] 可以形成一个上升子序列，那么只需要 dp[j]+1 与 之前的dp[i] 比较即可得到 i 位置的最长上升序列长度。
 * @label 动态规划 子序列问题
 */
var lengthOfLIS = function (nums) {
    const dp = Array(nums.length).fill(1);
    let result = 1;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);

        }
        if (dp[i] > result) result = dp[i];
    }

    return result
};


/**
 * @param {number[]} nums
 * @return {number}
 * @see {@link https://leetcode.cn/problems/longest-increasing-subsequence}
 * @see {@link https://leetcode.cn/problems/longest-increasing-subsequence/solution/zui-chang-shang-sheng-zi-xu-lie-dong-tai-gui-hua-2/}
 * @complexity 时间复杂度: O(n log(n))
 * @label 动态规划 二分查找 子序列问题
 */
var lengthOfLIS = function (nums) {
    const dp = Array(nums.length);
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        let left = 0, right = res;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (dp[mid] < nums[i]) left = mid + 1;
            else right = mid; // 如果 dp[mid] === nums[i], 一定是让right=mid，不然[7,7,7,7,7]这种情况结果就不对了
        }
        dp[left] = nums[i];
        if (res === right) res++;
    }

    return res;
};
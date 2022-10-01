/**
 * @param {number} n
 * @return {number}
 * @see {@link https://leetcode.cn/problems/integer-break}
 * @see {@link https://leetcode.cn/problems/integer-break/solution/343-zheng-shu-chai-fen-tan-xin-by-jyd/}
 * @label 数学推导
 * @complexity 时间复杂度：O(1)  空间复杂度：O(1)
 */
var integerBreak = function (n) {
    if (n <= 3) return n - 1;

    const a = parseInt(n / 3);
    const b = n % 3;

    if (b === 0) {
        return 3 ** a;
    } else if (b === 1) {
        return (3 ** (a - 1)) * 4;
    } else if (b === 2) {
        return (3 ** a) * 2;
    }
};


/**
 * @param {number} n
 * @return {number}
 * @see {@link https://leetcode.cn/problems/integer-break}
 * @see {@link https://programmercarl.com/0343.%E6%95%B4%E6%95%B0%E6%8B%86%E5%88%86.html}
 * @label 动态规划
 * @complexity 时间复杂度：O(n x n)  空间复杂度：O(n)
 */
var integerBreak = function (n) {
    const dp = Array(n + 1).fill(0);

    dp[2] = 1;

    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            // j * (i - j) 是单纯的把整数拆分为两个数相乘
            // j * dp[i - j]是拆分成两个以及两个以上的个数相乘
            // 同时还需要与之前的dp[i]作比较取最大
            dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j);
        }
    }

    return dp[n];
};
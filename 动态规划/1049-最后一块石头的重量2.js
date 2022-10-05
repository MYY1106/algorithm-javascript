/**
 * @param {number[]} stones
 * @return {number}
 * @see {@link https://leetcode.cn/problems/last-stone-weight-ii}
 * @see {@link https://leetcode.cn/problems/last-stone-weight-ii/solution/gong-shui-san-xie-xiang-jie-wei-he-neng-jgxik/}
 * @label 待复习 动态规划 01背包问题
 * @key 这道题跟416差不多，一个求能否装满，一个求最多能装多少
 * @key 事实上，本题相当于为原来 stones 数组中的数字添加 + − 符号，使得所形成的式子的和的绝对值最小
 */
var lastStoneWeightII = function (stones) {
    const sum = stones.reduce((prev, stone) => prev + stone, 0);
    const maxBagWeight = Math.floor(sum / 2);
    const dp = Array(maxBagWeight + 1).fill(0);

    for (let i = 0; i < stones.length; i++) {
        for (let j = maxBagWeight; j >= stones[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
        }
    }

    return sum - 2 * dp[maxBagWeight];
};
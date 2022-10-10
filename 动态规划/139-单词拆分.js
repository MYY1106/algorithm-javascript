/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * @see {@link https://leetcode.cn/problems/word-break}
 * @see {@link https://leetcode.cn/problems/word-break/solution/shou-hui-tu-jie-san-chong-fang-fa-dfs-bfs-dong-tai/}
 * @key 这里有一个注意的地方，不需要存path，因为题目不需要得到path
 * @label 回溯
 */
var wordBreak = function (s, wordDict) {
    const memo = []; // 用一个数组，存储计算的结果，数组索引为指针位置，值为计算的结果。下次遇到相同的子问题(start相同的)，直接返回命中的缓存值，就不用调重复的递归
    return backTracking(0);

    function backTracking (start) {
        if (start === s.length) {
            return true;
        }

        if (memo[start] !== undefined) return memo[start];

        for (let i = start; i < s.length; i++) {
            const str = s.slice(start, i + 1);
            if (wordDict.includes(str)) {
                if (memo[i + 1] = backTracking(i + 1)) return true;
            }
        }

        return false;
    }
};


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * @see {@link https://leetcode.cn/problems/word-break}
 * @see {@link https://programmercarl.com/0139.%E5%8D%95%E8%AF%8D%E6%8B%86%E5%88%86.html#%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%98}
 * @key 单词就是物品，字符串s就是背包，单词能否组成字符串s，就是问物品能不能把背包装满
 * @key 如果确定dp[j] 是true，且 [j, i] 这个区间的子串出现在字典里，那么dp[i]一定是true (j < i)
 */
var wordBreak = function (s, wordDict) {
    const dp = Array(s.length + 1).fill(false);
    dp[0] = true; // 这里没有实际意义，只是为了后续遍历

    for (let j = 0; j <= s.length; j++) {
        for (let i = 0; i < wordDict.length; i++) {
            if (wordDict[i].length <= j) {
                if (s.slice(j - wordDict[i].length, j) === wordDict[i] && dp[j - wordDict[i].length])
                    dp[j] = true;
                // dp[j] = s.slice(j - wordDict[i].length, j) === wordDict[i] && dp[j - wordDict[i].length] ? true : false; // 这里不能这么写，因为这样会把之前为true的覆盖掉
            }
        }
    }

    return dp[s.length]
};
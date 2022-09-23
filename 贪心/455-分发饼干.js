/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 * @see {@link https://leetcode.cn/problems/assign-cookies/}
 * @label 贪心
 * @key 让大饼干先满足大胃口的
 */
var findContentChildren = function (g, s) {
    let result = 0, index = s.length - 1;

    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    console.log(g, s)
    for (let i = g.length - 1; i >= 0; i--) {
        if (index >= 0 && s[index] >= g[i]) {
            result++;
            index--;
        }
    }

    return result;
};
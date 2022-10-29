/**
 * @param {number} n
 * @return {string[]} 
 * @see {@link https://leetcode.cn/problems/generate-parentheses}
 * @see {@link https://leetcode.cn/problems/generate-parentheses/solution/shou-hua-tu-jie-gua-hao-sheng-cheng-hui-su-suan-fa/}
 * @key 就是不停选括号，要么选左括号，要么选右括号
 * @key 只有当右括号大于左括号才可以选择右括号
 * @label 回溯 待复习
 */
var generateParenthesis = function (n) {
    const result = [];

    backTracking(n, n, "")

    return result

    function backTracking (left, right, str) {
        if (str.length === n * 2) {
            result.push(str);
        }

        if (left) {
            backTracking(left - 1, right, str + "(");
        }

        if (right > left) {
            backTracking(left, right - 1, str + ")");
        }
    }
};
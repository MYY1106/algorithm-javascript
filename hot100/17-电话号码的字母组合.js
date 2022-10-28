/**
 * @param {string} digits
 * @return {string[]}
 * @see {@link https://leetcode.cn/problems/letter-combinations-of-a-phone-number/}
 * @label 待复习 回溯 组合 剪枝
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) return [];

    const path = [];
    const result = [];
    const map = [
        "",
        "",
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz"
    ];

    backTracking(0);
    return result;

    function backTracking (index) {
        if (path.length === digits.length) {
            console.log(path);
            result.push(path.join(""));
            return;
        }

        for (let i = 0; i < map[digits[index]].length; i++) {
            path.push(map[digits[index]][i]);
            backTracking(index + 1);
            path.pop();
        }
    }
};

console.log(letterCombinations("2"));
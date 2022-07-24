/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @ref https://leetcode.cn/problems/backspace-string-compare/solution/shuang-zhi-zhen-bi-jiao-han-tui-ge-de-zi-8fn8/
 */
var backspaceCompare = function (s, t) {
    let sPos = s.length - 1, tPos = t.length - 1;
    let sSkip = 0, tSkip = 0;
    while (sPos >= 0 || tPos >= 0) {
        do {
            if (s[sPos] === '#')
                sSkip++;
            else if (sSkip > 0)
                sSkip--;
            else
                break;
            sPos--;
        } while (sPos >= 0);
        do {
            if (t[tPos] === '#')
                tSkip++;
            else if (tSkip > 0)
                tSkip--;
            else
                break;
            tPos--;
        } while (tPos >= 0);
        if (s[sPos] !== t[tPos]) return false
        tPos--;
        sPos--;
    }
    return true
};
console.log(backspaceCompare('ab#c', "ad#c"));
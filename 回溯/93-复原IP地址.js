/**
 * @param {string} s
 * @return {string[]}
 * @see {@link https://leetcode.cn/problems/restore-ip-addresses}
 * @see {@link https://programmercarl.com/0093.%E5%A4%8D%E5%8E%9FIP%E5%9C%B0%E5%9D%80.html}
 */
var restoreIpAddresses = function (s) {
    const result = [];
    const path = [];

    backTracking(s, 0);
    return result;

    function backTracking (s, start) {
        if (path.length === 3) {
            // 如果 path.length 已经等于3了，那么说明 s 从 start 开始后面的是第四个整数，所以只需去判断第四个整数是否合法即可
            // 这个终止条件是我没想到的
            if (isValid(s.slice(start))) result.push([...path, s.slice(start)].join('.'))
            return;
        }

        for (let i = start; i < s.length && i < start + 3; i++) { // i < start + 3 这个条件确保最多只取了三位
            if (!isValid(s.slice(start, i + 1))) continue;

            path.push(s.slice(start, i + 1));
            backTracking(s, i + 1);
            path.pop();
        }
    }

    function isValid (str) {
        if (str.length === 0) return false;// str为空 不合法
        if (str.startsWith('0') && str.length > 1) return false; // 0开头的数字 不合法
        if (str[0] > "9" || str[0] < "0") return false; // 遇到非数字字符 不合法
        if (Number(str) > 255) return false; // 如果大于255 不合法

        return true;
    }
};
/**
 * @param {string} s
 * @return {string[][]}
 * @see {@link https://leetcode.cn/problems/palindrome-partitioning}
 * @see {@link https://programmercarl.com/0131.%E5%88%86%E5%89%B2%E5%9B%9E%E6%96%87%E4%B8%B2.html}
 * @label 回溯 分割 模板
 */
var partition = function (s) {
    const result = [];
    const path = [];

    backTracking(s, 0);

    return result;

    function backTracking (s, start) {
        if (start >= s.length) {
            // 说明已经到了末尾，没有字符可以再做切割了，所以直接将path push到result中
            // 需要注意，这里的path中的子串必定都是回文串，因为如果不是的话，在循环的判断是否回文字符串那里就终止了，并不会进入到这里
            result.push(path);
            return;
        }

        for (let i = start; i < s.length; i++) {
            if (!isPalindrome(s, start, i)) continue;
            path.push(s.slice(start, i + 1));
            backTracking(s, i + 1);
            path.pop();
        }
    }

    function isPalindrome (str, start, end) {
        let left = start, right = end;

        while (left < right) {
            if (str[left++] !== str[right--]) return false;
        }

        return true;
    }
};

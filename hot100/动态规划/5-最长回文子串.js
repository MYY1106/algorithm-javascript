/**
 * @param {string} s
 * @return {string}
 * @see {@link https://leetcode.cn/problems/longest-palindromic-substring}
 * @key dp[i][j] = i到j的字符串是否是回文字符串
 * @label 动态规划 子序列问题 待复习
 */
var longestPalindrome = function (s) {
    const dp = Array(s.length).fill().map(() => Array(s.length).fill(false));
    let maxLen = 0;
    let start = 0, end = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i; j < s.length; j++) {

            if (s[i] === s[j]) {
                if (i === j) {
                    dp[i][j] = true;
                } else if (j - i === 1) {
                    dp[i][j] = true
                } else if (dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                }
            }
            if (dp[i][j] && maxLen < j - i + 1) {
                console.log(i, j);
                maxLen = j - i + 1;
                start = i;
                end = j;
            }
        }
    }

    return s.slice(start, end + 1);
};


/**
 * @param {string} s
 * @return {string}
 * @see {@link https://leetcode.cn/problems/longest-palindromic-substring}
 * @see {@link https://leetcode.cn/problems/longest-palindromic-substring/solution/zhong-xin-kuo-san-dong-tai-gui-hua-by-liweiwei1419/}
 * @key 遍历每一个下标，以这个下标为中心，利用「回文串」中心对称的特点，往两边扩散，看最多能扩散多远
 * @label 中心扩散法 待复习
 */
var longestPalindrome = function (s) {
    let maxLen = 0;
    let start = 0, end = 0;

    for (let i = 0; i < s.length; i++) {
        extend(i, i); // 如果传入重合的下标，进行中心扩散，此时得到的回文子串的长度是奇数
        extend(i, i + 1); // 如果传入相邻的下标，进行中心扩散，此时得到的回文子串的长度是偶数
    }

    function extend (left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        if (maxLen < (right - left - 1)) {
            start = left + 1;
            end = right - 1;
            maxLen = right - left - 1;
        }
    }

    return s.slice(start, end + 1);
};
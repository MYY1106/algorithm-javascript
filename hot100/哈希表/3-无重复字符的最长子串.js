/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max = 0;
    const map = new Map();
    let left = 0, right = 0;

    while (right < s.length) {
        if (map.has(s[right])) {
            left = Math.max(map.get(s[right]) + 1, left); // 有可能map.get(s[right]) + 1是在left前面，那么就不用管了
        }
        max = Math.max(right - left + 1, max);
        map.set(s[right], right);

        right++;
    }

    return max
};
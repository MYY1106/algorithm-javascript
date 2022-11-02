/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * @see {@link https://leetcode.cn/problems/merge-intervals}
 * @label 数组
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= intervals[i - 1][1]) {
            intervals[i] = [intervals[i - 1][0], Math.max(intervals[i - 1][1], intervals[i][1])];
            intervals.splice(i - 1, 1);// 这一步是On, 所以执行时间会比较长
            i--;
        }
    }
    return intervals
};


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * @see {@link https://leetcode.cn/problems/merge-intervals}
 * @see {@link https://leetcode.cn/problems/merge-intervals/solution/shou-hua-tu-jie-56he-bing-qu-jian-by-xiao_ben_zhu/}
 * @label 数组
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];
    let prev = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= prev[1]) {
            prev[1] = Math.max(intervals[i][1], prev[1]);
        } else {
            result.push(prev);
            prev = intervals[i];
        }
    }

    result.push(prev);

    return result;
};
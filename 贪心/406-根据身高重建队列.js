/**
 * @param {number[][]} people
 * @return {number[][]}
 * @see {@link https://leetcode.cn/problems/queue-reconstruction-by-height}
 * @see {@link https://programmercarl.com/0406.%E6%A0%B9%E6%8D%AE%E8%BA%AB%E9%AB%98%E9%87%8D%E5%BB%BA%E9%98%9F%E5%88%97.html}
 * @label 待复习 贪心 两个维度权衡问题
 */
var reconstructQueue = function (people) {
    let queue = [];

    people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0])

    for (let i = 0; i < people.length; i++) {
        queue.splice(people[i][1], 0, people[i]);
    }

    return queue;
};

console.log(reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]));
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const queue = []
    const res = [];
    let j = 0;

    for (let i = 0; i < k; i++) {
        while (nums[i] > queue[queue.length - 1])
            queue.pop();
        queue.push(nums[i]);
    }
    res.push(queue[0]);
    for (let i = k; i < nums.length; i++) {
        while (nums[i] > queue[queue.length - 1])
            queue.pop();
        queue.push(nums[i]);
        if (nums[j++] === queue[0])
            queue.shift();
        res.push(queue[0]);
    }
    return res;
};
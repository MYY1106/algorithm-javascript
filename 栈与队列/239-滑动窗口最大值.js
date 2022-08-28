/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * @method 单调队列
 * @key 先理解什么是单调队列再去做题
 * @ref https://leetcode.cn/problems/sliding-window-maximum/solution/hua-dong-chuang-kou-zui-da-zhi-by-leetco-ki6m/
 */
var maxSlidingWindow = function (nums, k) {
    const queue = []; // 存的是元素的下标
    const res = [];

    // 先计算头k个元素的最大值
    for (let i = 0; i < k; i++) {
        while (nums[i] >= nums[queue[queue.length - 1]]) // 如果即将要插入的元素大于前面的元素，那么说明前面的已经没有存在在队列的意义了，所以移除这些元素
            queue.pop();
        queue.push(i); // 插入元素
    }
    res.push(nums[queue[0]]); // 插入头k个元素的最大值

    // 计算后面的所有元素的最大值
    for (let i = k; i < nums.length; i++) {
        while (nums[i] >= nums[queue[queue.length - 1]]) // 如果即将要插入的元素大于前面的元素，那么说明前面的已经没有存在在队列的意义了，所以移除这些元素
            queue.pop();
        queue.push(i); // 插入元素
        
        while (i - k === queue[0]) // 如果queue[0]=== i-k 说明是要移除的元素的下标，所以将它移除
            queue.shift();
      
        res.push(nums[queue[0]]);
    }

    return res;
};

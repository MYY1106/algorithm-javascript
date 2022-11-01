/**
 * @param {number[]} height
 * @return {number}
 * @see {@link https://leetcode.cn/problems/container-with-most-water}
 * @see {@link https://leetcode.cn/problems/container-with-most-water/solution/container-with-most-water-shuang-zhi-zhen-fa-yi-do/}
 * @key 在每个状态下，无论长板或短板向中间收窄一格，都会导致水槽 底边宽度 −1−1​ 变短：
 * @key 若向内 移动短板 ，水槽的短板 min(h[i],h[j])min(h[i],h[j]) 可能变大，因此下个水槽的面积 可能增大 。
 * @key 若向内 移动长板 ，水槽的短板 min(h[i],h[j])min(h[i],h[j])​ 不变或变小，因此下个水槽的面积 一定变小 。
 * @label 双指针 待复习
 */
var maxArea = function (height) {
    let left = 0, right = height.length - 1;
    let max = 0;

    while (left < right) {
        const tmp = height[left] > height[right] ? (right - left) * height[right--] : (right - left) * height[left++];
        max = Math.max(max, tmp);
    }

    return max;
};

/**
 * @param {number[]} fruits
 * @return {number}
 * @method 滑动窗口
 */
var totalFruit = function (fruits) {
    let len = -Infinity;
    let left = 0, right = 0;
    let maxPos = new Map(); // 利用Map去记录不同种类水果的最大数组下标
    while (right < fruits.length) {
        maxPos.set(fruits[right], right)
        if (maxPos.size > 2) { // 当有大于两种水果种类时，其实就是窗口中有三种水果时
            let minPos = Infinity;
            maxPos.forEach((value) => minPos = value < minPos ? value : minPos); // 因为我们要的是最大窗口，所以应该是尽可能让left移动最小，故应找三种水果中数组下标最小的一个
            left = minPos + 1;
            maxPos.delete(fruits[minPos])
        }
        len = right - left + 1 > len ? right - left + 1 : len;
        right++;
    }
    return len;
};
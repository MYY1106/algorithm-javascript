/**
 * @description 事实上，边界就是小于根号x
 * @param {number} x
 * @return {number}
 * @result 1017 / 1017 个通过测试用例  状态：通过  执行用时: 68 ms  内存消耗: 42.4 MB
 */
var mySqrt = function (x) {
    if (x === 1) return 1 // 因为只有x大于1时，才会有x的平方根恒小于等于 x/2
    let left = 0, right = Math.floor(x / 2) + 1;
    while (left + 1 !== right) {
        mid = Math.floor((left + right) / 2);
        if (mid * mid <= x)
            left = mid;
        else
            right = mid;
    }
    return left;
};

console.log(mySqrt(1));
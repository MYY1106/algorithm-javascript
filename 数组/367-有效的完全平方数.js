/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (x) {
    if (x === 1) return 1 // 因为只有x大于1时，才会有x的平方根恒小于等于 x/2
    let left = 0, right = Math.floor(x / 2) + 1;
    while (left + 1 !== right) {
        mid = Math.floor((left + right) / 2);
        if (mid * mid <= x)
            left = mid;
        else
            right = mid;
    }
    return left === x;
};

console.log(isPerfectSquare(16));
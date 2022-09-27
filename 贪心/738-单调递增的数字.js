/**
 * @param {number} n
 * @return {number}
 * @label 贪心 序列问题
 */
var monotoneIncreasingDigits = function (n) {
    let num = String(n);

    for (let i = num.length - 2; i >= 0; i--) {
        if (num[i] > num[i + 1]) {
            num = num.slice(0, i) + String.fromCodePoint(num[i].codePointAt() - 1) + "9".repeat(num.length - i - 1);
        }
    }

    return Number(num);
};
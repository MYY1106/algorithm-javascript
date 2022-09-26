/**
 * @param {number[]} bills
 * @return {boolean}
 * @see {@link https://leetcode.cn/problems/lemonade-change/}
 * @label 贪心
 */
var lemonadeChange = function (bills) {
    let five = 0, ten = 0;

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            five++;
        } else if (bills[i] === 10) {
            if (five <= 0) return false
            five--;
            ten++;
        } else {
            if (five > 0 && ten > 0) {
                five--;
                ten--;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
};
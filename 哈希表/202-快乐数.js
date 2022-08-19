/**
 * @param {number} n
 * @return {boolean}
 * @key 题目中说了会无限循环，那么也就是说求和的过程中，sum会重复出现，这对解题很重要！
 * 所以我们需要快速判断一个元素是否出现集合里，所以就要使用哈希法了。
 */
var isHappy = function (n) {
    const set = new Set()
    let num = n.toString().split('').map(num => Number(num))
    while (true) {
        const result = num.reduce((prev, num) => prev + num ** 2, 0)
        if (result === 1) return true;
        if (set.has(result)) return false;
        set.add(result)
        num = result.toString().split('').map(num => Number(num))
    }
};


/**
 * @param {number} n
 * @return {boolean}
 * @key 用集合记录每次的计算结果来判断是否进入循环，因为这个集合可能大到无法存储，还可以使用快慢指针
 */
var isHappy = function (n) {
    let slowNum = n.toString().split('').map(num => Number(num)), fastNum = n.toString().split('').map(num => Number(num))
    let slowResult = 0, fastResult = -1;
    while (slowResult !== fastResult) {
        slowResult = slowNum.reduce((prev, num) => prev + num ** 2, 0)
        slowNum = slowResult.toString().split('').map(num => Number(num))

        fastResult = fastNum.reduce((prev, num) => prev + num ** 2, 0)
        fastNum = fastResult.toString().split('').map(num => Number(num))
        fastResult = fastNum.reduce((prev, num) => prev + num ** 2, 0)
        fastNum = fastResult.toString().split('').map(num => Number(num))
    }
    return slowResult === 1
};
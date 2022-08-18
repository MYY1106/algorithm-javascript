/**
 * @param {string[]} strs
 * @return {string[][]}
 * @method 哈希，将字符串排序后当作键值
 */
var groupAnagrams = function (strs) {
    const hash = new Map()
    strs.forEach((str) => {
        key = str.split('').sort().join()
        if (hash.has(key)) {
            hash.set(key, [...hash.get(key), str])
        } else {
            hash.set(key, [str])
        }
    })

    return [...hash.values()]
};
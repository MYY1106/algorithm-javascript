/**
 * @param {string[]} strs
 * @return {string[][]}
 * @see {@link https://leetcode.cn/problems/group-anagrams/submissions/}
 * @method 哈希，将字符串排序后当作键值
 * @label 已复习*1
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
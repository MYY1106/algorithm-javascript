/**
 * @param {string[]} strs
 * @return {string[][]}
 * @see {@link https://leetcode.cn/problems/group-anagrams/submissions/}
 * @method 哈希，将字符串排序后当作键值
 */
var groupAnagrams = function (strs) {
    const map = new Map();

    for (let i = 0; i < strs.length; i++) {
        const str = strs[i].split("").sort().join("");
        if (map.has(str)) {
            map.get(str).push(strs[i]);
        } else {
            map.set(str, [strs[i]]);
        }
    }

    return [...map.values()]
}
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * @result 超时 应该是sort的问题
 */
var findAnagrams = function (s, p) {
    const record = [];
    let left = 0, right = 0;
    const sortP = p.split('').sort().join('')
    while (right < s.length) {
        if (right - left === p.length - 1) {
            s.substring(left, right + 1).split('').sort().join('') === sortP && record.push(left)
            left++
        }
        right++;
    }
    return record;
};

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const record = [];
    let left = 0, right = 0;
    const mapS = Array(26).fill(0), mapP = Array(26).fill(0);
    const base = 'a'.charCodeAt();
    for (const letter of p) {
        mapP[letter.charCodeAt() - base]++;
    }
    while (right < s.length) {
        mapS[s[right].charCodeAt() - base]++;
        if (right - left > p.length - 1) {
            mapS[s[left].charCodeAt() - base]--;
            left++
        }
        if (mapS.toString() === mapP.toString()) record.push(left)
        right++;
    }
    return record;
};

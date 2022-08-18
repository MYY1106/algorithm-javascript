/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const record = Array(26).fill(0);
    const base = 'a'.charCodeAt();

    for (const letter of s) {
        record[letter.charCodeAt() - base]++;
    }

    for (const letter of t) {
        if (record[letter.charCodeAt() - base] === 0) return false;
        record[letter.charCodeAt() - base]--;
    }

    return true;
};
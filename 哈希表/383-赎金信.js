/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * @method 哈希法，数组
 */
var canConstruct = function (ransomNote, magazine) {
    const arr = Array(26).fill(0)
    const base = 'a'.charCodeAt()

    for (const letter of magazine) {
        arr[letter.charCodeAt() - base]++
    }

    for (const letter of ransomNote) {
        if (arr[letter.charCodeAt() - base] <= 0)
            return false
        arr[letter.charCodeAt() - base]--
    }
};
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits.length) return [];

    const map = [
        "",
        "",
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz"
    ];
    const result = [];
    let path = [];

    const backTracking = (start) => {
        if (path.length === digits.length) {
            result.push(path.join(""));
            return;
        }

        for (const letter of map[Number(digits[start])]) {
            path.push(letter);
            backTracking(start + 1);
            path.pop();
        }
    }

    backTracking(0);

    return result;
};
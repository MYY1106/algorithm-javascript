/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * @label 待复习
 */
var rotate = function (matrix) {
    const len = matrix.length;

    // 转置
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];

            // 内存消耗更低
            // let temp = matrix[i][j]
            // matrix[i][j] = matrix[j][i]
            // matrix[j][i] = temp
        }
    }

    // 左右翻转
    // for (let i = 0; i < len; i++) {
    //     for (let j = 0; j < len / 2; j++) {
    //         [matrix[i][j], matrix[i][len - 1 - j]] = [matrix[i][len - 1 - j], matrix[i][j]];
    //     }
    // }

    // 这种翻转内存消耗更低
    matrix.map(item => item.reverse())
};
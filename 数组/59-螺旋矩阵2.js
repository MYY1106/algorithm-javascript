/**
 * @param {number} n
 * @return {number[][]}
 * @ref https://leetcode.cn/problems/spiral-matrix-ii/solution/spiral-matrix-ii-mo-ni-fa-she-ding-bian-jie-qing-x/
 */
var generateMatrix = function (n) {
    let top = 0, right = n - 1, bottom = n - 1, left = 0;
    let num = 1;
    let arr = new Array(n)
    for (let i = 0; i < n; i++) {
        arr[i] = []
    }
    while (num <= n ** 2) {
        for (let i = left; i <= right; i++) arr[top][i] = num++;
        top++;
        for (let i = top; i <= bottom; i++) arr[i][right] = num++;
        right--;
        for (let i = right; i >= left; i--) arr[bottom][i] = num++;
        bottom--;
        for (let i = bottom; i >= top; i--) arr[i][left] = num++;
        left++;
    }
    return arr
};

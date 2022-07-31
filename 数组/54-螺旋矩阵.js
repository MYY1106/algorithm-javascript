/**
 * @param {number[][]} matrix
 * @return {number[]}
 * @ref https://leetcode.cn/problems/spiral-matrix-ii/solution/spiral-matrix-ii-mo-ni-fa-she-ding-bian-jie-qing-x/ 魔改了一下
 */
var spiralOrder = function (matrix) {
    const m = matrix.length, n = matrix[0].length;
    let top = 0, right = n - 1, bottom = m - 1, left = 0;
    let count = 0;
    const arr = [];
    while (count < m * n) {
        for (let i = left; i <= right && count < m * n; i++) { // 为什么条件相较于螺旋矩阵2多加了count < m * n，因为长方形的问题，如果不加这个条件可能导致多添加了重复的元素，例如[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]中，left和right可能最后会相等，导致第三个循环多添加了6，可以试着画下图去理解
            console.log(1, arr);
            arr.push(matrix[top][i]);
            count++;
        }
        top++;
        for (let i = top; i <= bottom && count < m * n; i++) {
            arr.push(matrix[i][right]);
            count++;
        }
        right--;
        for (let i = right; i >= left && count < m * n; i--) {
            arr.push(matrix[bottom][i]);
            count++;
        }
        bottom--;
        for (let i = bottom; i >= top && count < m * n; i--) {
            arr.push(matrix[i][left]);
            count++;
        }
        left++;
    }
    return arr;
};

console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
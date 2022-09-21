/**
 * @param {number} n
 * @return {string[][]}
 * @see {@link https://leetcode.cn/problems/n-queens}
 * @see {@link https://programmercarl.com/0051.N%E7%9A%87%E5%90%8E.html}
 * @label 回溯 棋盘
 * @key 棋盘的宽度就是for循环的长度，递归的深度就是棋盘的高度
 */
var solveNQueens = function (n) {
    const result = [];
    const chessboard = new Array(n).fill([]).map(() => new Array(n).fill('.'));

    backTracking(0);

    return result;

    function backTracking (row) {
        if (row === n) {
            result.push(chessboard.map(arr => arr.join("")));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (!isValid(row, col)) continue;

            chessboard[row][col] = 'Q';
            backTracking(row + 1);
            chessboard[row][col] = '.';
        }
    }

    function isValid (row, col) {
        // 判断col列是否有皇后
        for (let i = 0; i < row; i++) {
            if (chessboard[i][col] === 'Q') return false;
        }

        // 判断左斜线(45度角)是否有皇后
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (chessboard[i][j] === 'Q') return false;
        }

        // 判断右斜线(135度角)是否有皇后
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (chessboard[i][j] === 'Q') return false;
        }

        return true;
    }
};
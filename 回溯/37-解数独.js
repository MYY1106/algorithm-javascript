/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * @see {@link https://leetcode.cn/problems/sudoku-solver/}
 * @see {@link https://programmercarl.com/0037.%E8%A7%A3%E6%95%B0%E7%8B%AC.html}
 * @label 回溯 棋盘 待复习
 * @key 关键就是理解backTracking中三个return语句的作用
 */
var solveSudoku = function (board) {
    backTracking();

    function backTracking () {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] !== '.') continue;  // 跳过原始数字

                for (let num = 1; num <= 9; num++) {
                    if (!isValid(num.toString(), i, j)) continue;

                    board[i][j] = num.toString();
                    if (backTracking()) return true;
                    board[i][j] = ".";
                }
                return false;
            }
        }
        return true; // 遍历完没有返回false，说明找到了合适棋盘位置了
    }

    function isValid (num, row, col) {
        // 判断同列是否有为num的数字
        for (let i = 0; i < 9; i++) {
            if (board[i][col] === num) return false;
        }

        // 判断同行是否有为num的数字
        for (let j = 0; j < 9; j++) {
            if (board[row][j] === num) return false;
        }

        // 判断同组是否有为num的数字
        const startRow = row - (row % 3);
        const startCol = col - (col % 3);
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] === num) return false;
            }
        }

        return true;
    }
};
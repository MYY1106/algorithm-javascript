/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * @see {@link https://leetcode.cn/problems/word-search}
 * @see {@link https://leetcode.cn/problems/word-search/solution/shou-hua-tu-jie-79-dan-ci-sou-suo-dfs-si-lu-de-cha/}
 * @label 回溯
 */
var exist = function (board, word) {
    const m = board.length;
    const n = board[0].length;
    const used = Array(m).fill().map(() => Array(n));

    const backTracking = (row, col, i) => {
        if (i === word.length) { // 已经全部找到了
            return true;
        }
        if (row < 0 || col < 0 || row >= m || col >= n) { // 越界
            return false;
        }
        if (used[row][col] || board[row][col] !== word[i]) { // 当前点已经访问过 或 非目标点
            return false;
        }

        used[row][col] = true; // 当前点是OK的，继续递归考察

        // 继续递归考察
        const canFindRest = backTracking(row + 1, col, i + 1) || backTracking(row, col + 1, i + 1) || backTracking(row - 1, col, i + 1) || backTracking(row, col - 1, i + 1);

        if (canFindRest) {
            return true; // 基于当前点[row,col]，可以为剩下的字符找到路径
        } else {
            used[row][col] = false; // 不能为剩下字符找到路径，返回false，撤销当前点的访问状态
            return false;
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0] && backTracking(i, j, 0)) {
                return true;
            }
        }

    }

    return false;
};

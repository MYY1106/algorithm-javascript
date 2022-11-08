/**
 * @param {TreeNode} root
 * @return {number[][]}
 * @method DFS
 * @see {@link https://github.com/sl1673495/leetcode-javascript/issues/30}
 */
var levelOrder = function (root) {
    const result = [];

    dfs(root, 0);

    return result;

    function dfs (root, level) {
        if (!root) return;

        if (!result[level]) result[level] = [];
        result[level].push(root.val);
        root.left && bfs(root.left, level + 1);
        root.right && bfs(root.right, level + 1);
    }
}


/**
 * @param {TreeNode} root
 * @return {number[][]}
 * @method BFS
 * @see {@link https://github.com/sl1673495/leetcode-javascript/issues/30}
 */
var levelOrder = function (root) {
    if (!root) return [];
    const result = [];
    const queue = [root];

    while (queue.length) {
        const levelResult = [];
        const len = queue.length;

        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            levelResult.push(node.val)
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }

        result.push(levelResult);
    }

    return result;
};
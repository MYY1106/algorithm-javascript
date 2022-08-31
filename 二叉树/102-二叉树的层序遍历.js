/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * @method DFS
 * @see {@link https://github.com/sl1673495/leetcode-javascript/issues/30}
 */
var levelOrder = function (root) {
    const result = [];

    const dfs = (node, level = 0) => {
        if (!node) return;

        if (!result[level]) result[level] = [];

        result[level].push(node.val);
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }

    dfs(root);

    return result;
};

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
        const n = queue.length;
        const levelResult = [];
        for (let i = 0; i < n; i++) {
            const node = queue.shift();
            levelResult.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        result.push(levelResult)
    }

    return result;
};
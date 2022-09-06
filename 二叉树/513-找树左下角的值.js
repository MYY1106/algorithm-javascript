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
 * @return {number}
 * @see {@link https://leetcode.cn/problems/find-bottom-left-tree-value}
 * @method 递归前序遍历
 */
var findBottomLeftValue = function (root) {
    let maxDepth = 0, nodeVal;
    const dfs = (root, depth) => {
        if (!root) return;
        if (!root.right && !root.left) {
            if (depth > maxDepth) {
                maxDepth = depth
                nodeVal = root.val
            }
        }

        dfs(root.left, depth + 1)
        dfs(root.right, depth + 1)
    }

    dfs(root, 1)

    return nodeVal
};


/**
 * @param {TreeNode} root
 * @return {number}
 * @see {@link https://leetcode.cn/problems/find-bottom-left-tree-value}
 * @method 层序遍历
 */
var findBottomLeftValue = function (root) {
    let nodeVal;
    const queue = [root];

    while (queue.length) {
        const length = queue.length;
        for (let i = 0; i < length; i++) {
            const node = queue.shift();

            if (i === 0) nodeVal = node.val; // 如果是第一个节点，说明是这一层中的最左边的节点

            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }

    return nodeVal;
};
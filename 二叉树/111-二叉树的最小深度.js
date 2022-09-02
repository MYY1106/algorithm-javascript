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
 * @see {@link https://leetcode.cn/problems/minimum-depth-of-binary-tree}
 * @see {@link https://programmercarl.com/0111.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%B0%8F%E6%B7%B1%E5%BA%A6.html}
 */
var minDepth = function (root) {
    if (!root) return 0 // root为空，最小深度就是 0

    let leftDepth = minDepth(root.left) // 左
    let rightDepth = minDepth(root.right) // 右
    // 中
    if (!root.left && !root.right) // 如果是叶子节点
        return 1; // 它的最小深度就是 1
    if (root.left && !root.right) // 有左子树，无右子树
        return leftDepth + 1 // 它的最小深度就是 左子树最小深度 + 1
    if (!root.left && root.right) // 无左子树，有右子树
        return rightDepth + 1 // 它的最小深度就是 右子树最小深度 + 1
    if (root.left && root.right) // 有左子树，有右子树
        return Math.min(leftDepth, rightDepth) + 1 // 它的最小深度就是 左右子树中的最小深度 + 1
};


/**
 * @param {TreeNode} root
 * @return {number}
 * @see {@link https://leetcode.cn/problems/minimum-depth-of-binary-tree}
 * @method 层序遍历
 */
var minDepth = function (root) {
    if (!root) return 0;

    const queue = [root];
    let depth = 0;
    while (queue.length) {
        const count = queue.length;
        depth++;
        for (let i = 0; i < count; i++) {
            const node = queue.shift();
            if (!node.left && !node.right) return depth; // 如果是叶子节点，直接返回depth
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
};

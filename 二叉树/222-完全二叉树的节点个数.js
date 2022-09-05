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
 * @see {@link https://leetcode.cn/problems/count-complete-tree-nodes}
 * @method 普通二叉树后序遍历
 */
var countNodes = function (root) {
    const bfs = (root) => {
        if (root === null) return 0

        const leftCount = bfs(root.left) // 左
        const rightCount = bfs(root.right) // 右
        const count = leftCount + rightCount + 1 // 中

        return count
    }
    return bfs(root)
};


/**
 * @param {TreeNode} root
 * @return {number}
 * @see {@link https://leetcode.cn/problems/count-complete-tree-nodes}
 * @see {@link https://programmercarl.com/0222.%E5%AE%8C%E5%85%A8%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E8%8A%82%E7%82%B9%E4%B8%AA%E6%95%B0.html#%E5%AE%8C%E5%85%A8%E4%BA%8C%E5%8F%89%E6%A0%91}
 * @method 利用完全二叉树性质
 * @key 利用完全二叉树和满二叉树的性质减少递归操作
 */
var countNodes = function (root) {
    if (root === null) return 0;

    /** @description 如果以root为根节点的树是一颗满二叉树，那就可以通过这颗二叉树的深度计算得到这棵二叉树有多少个节点 */
    let leftNode = root.left, rightNode = root.right;
    let leftDepth = 0, rightDepth = 0;
    while (leftNode) {
        leftDepth++;
        leftNode = leftNode.left;
    }
    while (rightNode) {
        rightDepth++;
        rightNode = rightNode.right;
    }
    if (rightDepth === leftDepth) return 2 ** (rightDepth + 1) - 1; // 在完全二叉树中，如果递归向左遍历的深度等于递归向右遍历的深度，那说明就是满二叉树

    return countNodes(root.left) + countNodes(root.right) + 1;
};
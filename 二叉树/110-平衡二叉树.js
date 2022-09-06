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
 * @return {boolean}
 * @see {@link https://leetcode.cn/problems/balanced-binary-tree}
 * @see {@link https://programmercarl.com/0110.%E5%B9%B3%E8%A1%A1%E4%BA%8C%E5%8F%89%E6%A0%91.html}
 * @method 递归后序遍历
 */
var isBalanced = function (root) {
    const getHeight = (root) => {
        if (!root) return 0;

        const leftHeight = getHeight(root.left);
        const rightHeight = getHeight(root.right);

        if (leftHeight === -1 || rightHeight === -1) // leftHeight/rightHeight为-1，说明已经左子树/右子树不为平衡二叉树
            return -1;

        if (Math.abs(leftHeight - rightHeight) > 1) // Math.abs(leftHeight - rightHeight) > 1，说明以root为根节点的二叉树不为平衡二叉树
            return -1;

        return 1 + Math.max(leftHeight, rightHeight);
    }

    return getHeight(root) !== -1
};
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
 * @see {@link https://leetcode.cn/problems/sum-of-left-leaves}
 */
var sumOfLeftLeaves = function (root) {
    if (!root) return 0;

    const leftValue = sumOfLeftLeaves(root.left);
    const rightValue = sumOfLeftLeaves(root.right);

    if (root.left && !root.left.left && !root.left.right) // 若存在左叶子节点
        return root.left.val + rightValue;

    return leftValue + rightValue;
};
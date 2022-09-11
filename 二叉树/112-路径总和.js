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
 * @param {number} targetSum
 * @return {boolean}
 * @see {@link https://leetcode.cn/problems/path-sum}
 * @method 递归遍历
 * @label 待复习
 */
var hasPathSum = function (root, targetSum) {
    const dfs = (root, count) => {
        if (!root) return false; // 若不存在节点
        if (!root.left && !root.right && count + root.val === targetSum) return true; // 若是叶子节点，且总和等于targetSum
        if (!root.left && !root.right) return false; // 若是叶子节点，且总和不等于targetSum

        if (root.left) {
            // 若存在左子树，则继续递归，如果递归返回true，则返回true
            // 一开始就写错在了这里，直接写成了return dfs(root.left, count + root.val)
            // 我们要找的是有没有符合条件的，而不是有没有不符合条件的
            if (dfs(root.left, count + root.val)) return true;
        }
        if (root.right) {
            // 若存在右子树，则继续递归，如果递归返回true，则返回true
            // 一开始就写错在了这里，直接写成了return dfs(root.right, count + root.val)
            // 我们要找的是有没有符合条件的，而不是有没有不符合条件的
            if (dfs(root.right, count + root.val)) return true;
        }
        return false;
    }
    return dfs(root, 0)
};


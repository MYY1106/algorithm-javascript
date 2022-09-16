/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 * @see {@link https://leetcode.cn/problems/trim-a-binary-search-tree/}
 * @see {@link https://programmercarl.com/0669.%E4%BF%AE%E5%89%AA%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91.html#%E9%80%92%E5%BD%92%E6%B3%95}
 * @method 递归遍历
 * @label 待复习
 */
var trimBST = function (root, low, high) {
    if (!root) return null; // 遇到空节点，直接返回

    if (root.val < low) return trimBST(root.right, low, high); // 如果root.val比low小，说明root和root.left都不在范围内，所以直接去修剪root.right
    else if (root.val > high) return trimBST(root.left, low, high); // 如果root.val比high大，说明root和root.root都不在范围内，所以直接去修剪root.left
    else { // 说明root.val是符合范围的，但是左子树和右子树是否符合范围不确定，所以要去修剪root.left和root.right
        root.left = trimBST(root.left, low, high);
        root.right = trimBST(root.left, low, high);
        return root;
    }
};
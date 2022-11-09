/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 * @see {@link https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/solution/114-er-cha-shu-zhan-kai-wei-lian-biao-by-ming-zhi-/}
 * @see {@link https://leetcode.cn/problems/flatten-binary-tree-to-linked-list}
 * @label 待复习 
 */
var flatten = function (root) {
    if (!root) return;

    flatten(root.left);
    flatten(root.right);

    const right = root.right;
    root.right = root.left;
    root.left = null;
    let node = root.right;
    while (node.right !== null) node = node.right;
    node.right = right;
};
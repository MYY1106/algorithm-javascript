/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 * @see {@link https://leetcode.cn/problems/search-in-a-binary-search-tree}
 * @method 递归前序遍历
 * @label 二叉搜索树模板
 */
var searchBST = function (root, val) {
    if (!root) return null
    if (root.val === val) return root
    if (root.val > val) return searchBST(root.left, val)
    if (root.val < val) return searchBST(root.right, val)
};


/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 * @see {@link https://leetcode.cn/problems/search-in-a-binary-search-tree}
 * @method 迭代遍历
 * @label 二叉搜索树模板
 */
var searchBST = function (root, val) {
    let node = root;
    while (node) {
        if (node.val === val) return node;
        else if (node.val > val) node = node.left;
        else node = node.right;
    }
    return null;
};

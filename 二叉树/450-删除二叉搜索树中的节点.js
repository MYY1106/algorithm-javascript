/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 * @see {@link https://leetcode.cn/problems/delete-node-in-a-bst/}
 * @see {@link https://programmercarl.com/0450.%E5%88%A0%E9%99%A4%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9.html}
 * @method 递归遍历
 * @label 待复习
 */
var deleteNode = function (root, key) {
    if (!root) return root;

    if (key === root.val) {
        if (!root.right && !root.left) return null  // 没找到删除的节点，遍历到空节点直接返回了
        else if (!root.right && root.left) return root.left// 右孩子为空（叶子节点），直接删除节点， 返回NULL为根节点
        else if (root.right && !root.left) return root.right // 左孩子为空（叶子节点），直接删除节点， 返回NULL为根节点
        else { // 左右孩子节点都不为空，则将删除节点的左子树放到删除节点的右子树的最左面节点的左孩子的位置
            getMinNode(root.right).left = root.left;
            return root.right;
        }
    }

    if (key > root.val) root.right = deleteNode(root.right, key) // 这里为什么要root.right=deleteNode(root.right, key)，而不是return deleteNode(root.right, key)
    // 因为根节点可能被删除了，所以应该是要把新的节点返回给root.right
    else if (key < root.val) root.left = deleteNode(root.left, key)

    return root

    function getMinNode (root) {
        let node = root;
        while (node.left) {
            node = node.left
        }
        return node;
    }
};
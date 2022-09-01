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
 * @return {TreeNode}
 * @see {@link https://leetcode.cn/problems/invert-binary-tree/}
 * @method 统一迭代遍历 
 * @key 这里需要注意，不可以使用中序遍历，因为如果使用中序遍历的话，先将左孩子进行翻转，然后左右孩子翻转，然后右孩子翻转，但是这里的右孩子实际上是之前的左孩子，也就是说之前的左孩子翻转了两次
 */
var invertTree = function (root) {
    if (!root) return root

    let node;
    let queue = [root];

    while (queue.length) {
        node = queue.shift()
        if (!node) {
            node = queue.shift()
            const tmp = node.left;
            node.left = node.right;
            node.right = tmp;
        } else {
            if (node?.left?.right || node?.left?.left) queue.push(node.left)
            queue.push(null)
            queue.push(node)
            if (node?.right?.right || node?.right?.left) queue.push(node.right)
        }
    }

    return root
};
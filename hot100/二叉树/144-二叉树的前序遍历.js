/**
 * @param {TreeNode} root
 * @return {number[]}
 * @see {@link https://leetcode.cn/problems/binary-tree-preorder-traversal}
 * @label 迭代 前序遍历
 */
var preorderTraversal = function (root) {
    const stack = [];
    const result = [];
    let node = root;

    while (node) {
        result.push(node.val);
        root.right && stack.push(root.right);
        root.left && stack.push(root.left);
        node = stack.pop();
    }

    return result;
}


/**
 * @param {TreeNode} root
 * @return {number[]}
 * @see {@link https://leetcode.cn/problems/binary-tree-preorder-traversal}
 * @label 统一迭代 前序遍历
 */
var preorderTraversal = function (root) {
    if (!root) return [];

    const stack = [root];
    const result = [];

    while (stack.length) {
        const node = stack.pop();
        if (!node) {
            result.push(stack.pop().val);
        } else {
            node.right && stack.push(node.right);
            node.left && stack.push(node.left);
            stack.push(node);
            stack.push(null);
        }
    }

    return result;
}
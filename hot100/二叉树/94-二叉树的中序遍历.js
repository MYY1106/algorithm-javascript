/**
 * @param {TreeNode} root
 * @return {number[]}
 * @see {@link https://leetcode.cn/problems/binary-tree-inorder-traversal}
 * @label 递归 中序遍历
 */
var inorderTraversal = function (root) {
    const result = [];

    traversal(root);

    return result;

    function traversal (root) {
        if (root === null) return;

        traversal(root.left);
        result.push(root.val)
        traversal(root.right);
    }
}


/**
 * @param {TreeNode} root
 * @return {number[]}
 * @see {@link https://leetcode.cn/problems/binary-tree-inorder-traversal}
 * @label 迭代 中序遍历
 */
var inorderTraversal = function (root) {
    const result = [];
    const stack = [];
    let node = root;

    while (node || stack.length) {
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            const x = stack.pop();
            result.push(x.val);
            node = x.right;
        }
    }

    return result;
}


/**
 * @param {TreeNode} root
 * @return {number[]}
 * @see {@link https://leetcode.cn/problems/binary-tree-inorder-traversal}
 * @label 统一迭代 中序遍历
 */
var inorderTraversal = function (root) {
    if (!root) return [];

    const result = [];
    const stack = [root];

    while (stack.length) {
        const node = stack.pop();
        if (!node) {
            result.push(stack.pop().val);
        } else {
            node.right && stack.push(node.right);
            stack.push(node);
            stack.push(null);
            node.left && stack.push(node.left);
        }
    }

    return result;
}
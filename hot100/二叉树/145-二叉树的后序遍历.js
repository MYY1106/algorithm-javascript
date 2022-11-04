/**
 * @param {TreeNode} root
 * @return {number[]}
 * @see {@link https://leetcode.cn/problems/binary-tree-postorder-traversal}
 * @label 迭代 后序遍历
 */
var postorderTraversal = function (root) {
    const result = [];
    const stack = [];
    let node = root, prev = null;

    while (node || stack.length) {
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            const x = stack.pop();
            if (x.right === prev || !x.right) {
                result.push(x.val);
                prev = x;
            } else {
                stack.push(x);
                node = x.right;
            }
        }
    }

    return result;
}


/**
 * @param {TreeNode} root
 * @return {number[]}
 * @see {@link https://leetcode.cn/problems/binary-tree-postorder-traversal}
 * @label 统一迭代 后序遍历
 */
var postorderTraversal = function (root) {
    if (!root) return [];

    const stack = [root];
    const result = [];

    while (stack.length) {
        const node = stack.pop();
        if (!node) {
            result.push(stack.pop().val);
        } else {
            stack.push(node);
            stack.push(null);
            node.right && stack.push(node.right);
            node.left && stack.push(node.left);
        }
    }

    return result;
}
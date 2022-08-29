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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    const stack = [];
    const result = []
    let node = root;

    while (node) {
        result.push(node.val);
        node.right && stack.push(node.right);
        node.left && stack.push(node.left);
        node = stack.pop();
    }

    return result
};


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const stack = [];
    const result = [];
    let node = root;

    while (stack.length || node) {
        if (node) {
            stack.push(node);
            node = node.left
        } else {
            const x = stack.pop()
            result.push(x.val)
            node = x.right
        }
    }

    return result;
};


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    const stack = [];
    const result = [];
    let node = root, prev = null; // prev是个关键

    while (stack.length || node) {
        if (node) {
            stack.push(node);
            node = node.left
        } else {
            const x = stack.pop()
            if (x.right === prev || !x.right) { // 如果x的右子树刚操作过了，或者x没有右子树
                result.push(x.val)
                prev = x // 保存下现在操作的节点
            } else {
                stack.push(x)
                node = x.right
            }
        }
    }

    return result;
};

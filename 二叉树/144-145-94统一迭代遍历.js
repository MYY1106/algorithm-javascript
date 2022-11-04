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
 * @see {@link https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E7%BB%9F%E4%B8%80%E8%BF%AD%E4%BB%A3%E6%B3%95.html}
 * @label 已复习*1
 */
var preorderTraversal = function (root) {
    if (!root) return []; // 如果是一个空数组，直接返回[]（root为[]时，类型转换就会被转成false）

    const stack = [root];
    const result = [];
    let node;

    while (stack.length) {
        node = stack.pop();
        if (!node) { // 如果是null 说明后面一个节点是待处理节点
            result.push(stack.pop().val);
        } else {
            node.right && stack.push(node.right);
            node.left && stack.push(node.left);
            stack.push(node);
            stack.push(null); // 利用null去标记后面一个节点是待处理节点
        }
    }

    return result;
};


/**
 * @param {TreeNode} root
 * @return {number[]}
 * @see {@link https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E7%BB%9F%E4%B8%80%E8%BF%AD%E4%BB%A3%E6%B3%95.html}
 * @label 已复习*1
 */
var inorderTraversal = function (root) {
    if (!root) return []; // 如果是一个空数组，直接返回[]（root为[]时，类型转换就会被转成false）

    const stack = [root];
    const result = [];
    let node;

    while (stack.length) {
        node = stack.pop();
        if (!node) { // 如果是null 说明后面一个节点是待处理节点
            result.push(stack.pop().val);
        } else {
            node.right && stack.push(node.right);
            stack.push(node);
            stack.push(null); // 利用null去标记后面一个节点是待处理节点
            node.left && stack.push(node.left);
        }
    }

    return result;
};


/**
 * @param {TreeNode} root
 * @return {number[]}
 * @see {@link https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E7%BB%9F%E4%B8%80%E8%BF%AD%E4%BB%A3%E6%B3%95.html}
 * @label 已复习*1
 */
var postorderTraversal = function (root) {
    if (!root) return []; // 如果是一个空数组，直接返回[]（root为[]时，类型转换就会被转成false）

    const stack = [root];
    const result = [];
    let node;

    while (stack.length) {
        node = stack.pop();
        if (!node) { // 如果是null 说明后面一个节点是待处理节点
            result.push(stack.pop().val);
        } else {
            stack.push(node);
            stack.push(null); // 利用null去标记后面一个节点是待处理节点
            node.right && stack.push(node.right);
            node.left && stack.push(node.left);
        }
    }

    return result;
};

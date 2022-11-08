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
 * @return {boolean}
 * @see {@link https://leetcode.cn/problems/symmetric-tree/}
 * @see {@link https://programmercarl.com/0101.%E5%AF%B9%E7%A7%B0%E4%BA%8C%E5%8F%89%E6%A0%91.html}
 * @key 注意终止条件
 * @label 递归 已复习*1
 */
var isSymmetric = function (root) {
    // 1. 确定递归的参数 root.left root.right和返回值true false 
    const bfs = (left, right) => {
        // 2. 确定终止条件 空的情况
        if (left === null && right === null) return true; // 如果两个都为null
        if (left === null ^ right === null) return false; // 如果一个为null，一个不为null
        if (left.val !== right.val) return false; // 如果val不相等

        // 3. 确定单层递归逻辑
        return bfs(left.right, right.left) && bfs(left.left, right.right);
    }

    return bfs(root.left, root.right);
};


/**
 * @param {TreeNode} root
 * @return {boolean}
 * @see {@link https://leetcode.cn/problems/symmetric-tree/}
 * @see {@link https://programmercarl.com/0101.%E5%AF%B9%E7%A7%B0%E4%BA%8C%E5%8F%89%E6%A0%91.html}
 * @key 注意终止条件
 * @label 迭代前序遍历 已复习*1
 */
var isSymmetric = function (root) {
    if (!root) return true;

    const queue = [root.left, root.right];
    let leftNode, rightNode;

    while (queue.length) {
        leftNode = queue.shift();
        rightNode = queue.shift();

        if (leftNode === null && rightNode === null) continue;
        if (leftNode === null ^ rightNode === null) return false; // 如果一个为null，一个不为null
        if (leftNode.val !== rightNode.val) return false

        queue.push(leftNode.left, rightNode.right)
        queue.push(leftNode.right, rightNode.left)
    }
    return true
};
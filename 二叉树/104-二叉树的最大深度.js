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
 * @return {number}
 * @see {@link https://leetcode.cn/problems/maximum-depth-of-binary-tree}
 * @see {@link https://programmercarl.com/0104.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6.html}
 * @method 后序递归遍历
 * @key 节点的高度与节点的深度是两个不同的概念，高度是自底向上逐层累加，深度是自顶向下逐层累加
 * @key 根节点的高度就是二叉树的最大深度，所以本题中我们通过后序求的根节点高度来求的二叉树最大深度
 * @key 这一点是我一开始没有想清楚的，很多题解同样没有讲清楚
 */
var maxDepth = function (root) {
    if (!root) return 0; // 若是叶子节点，高度是0，返回0

    const left = maxDepth(root.left); // 左
    const right = maxDepth(root.right); // 右
    const depth = Math.max(left, right) + 1; // 中

    return depth;
};


/**
 * @param {TreeNode} root
 * @return {number}
 * @see {@link https://leetcode.cn/problems/maximum-depth-of-binary-tree}
 * @see {@link https://programmercarl.com/0104.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E5%A4%A7%E6%B7%B1%E5%BA%A6.html}
 * @method 层次遍历
 * @key 需要注意的是，这里虽然有两层循环，但实际上不是两次循环，想一下就知道了
 */
var maxDepth = function (root) {
    if (!root) return 0;

    const queue = [root];
    let depth = 0;

    while (queue.length) {
        depth++;
        const nodeCount = queue.length;
        for (let i = 0; i < nodeCount; i++) {
            const node = queue.shift();
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }

    return depth;
};
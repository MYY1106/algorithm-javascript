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
 * @return {string[]}
 * @see {@link https://leetcode.cn/problems/binary-tree-paths}
 * @see {@link https://leetcode.cn/problems/binary-tree-paths/solution/tu-jie-er-cha-shu-de-suo-you-lu-jing-by-xiao_ben_z/}
 * @method 递归前序遍历+回溯
 */
var binaryTreePaths = function (root) {
    let result = [];

    const getPath = (root, pathStr = '') => {
        if (!root.right && !root.left) {
            result.push(pathStr + root.val);
        }

        pathStr += root.val + '->';
        root.left && getPath(root.left, pathStr);
        root.right && getPath(root.right, pathStr); // 事实上这里隐藏着回溯，这里传入的pathStr，是当前递归中，加上当前节点的val的，不是之前递归左子树累加的str，其实是做了某种意义上的撤销选择
    }

    getPath(root);

    return result;
};

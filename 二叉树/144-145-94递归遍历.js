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
 * @shortcoming 内存消耗大
 */
var preorderTraversal = function (root) {
    if (root === null) {
        return [];
    }

    const result = [];

    result.push(root.val);
    result.push([...preorderTraversal(root.left)])
    result.push([...preorderTraversal(root.right)])
    return result
};


/**
 * @param {TreeNode} root
 * @return {number[]}
 * @method 优化
 */
var preorderTraversal = function (root) {
    const result = [];

    const dfs = (root) => {
        if (root) {
            result.push(root.val);
            dfs(root.left);
            dfs(root.right);
        }
    }

    dfs(root)

    return result
};


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const result = []

    const dfs = (root) => {
        if (root) {
            dfs(root.left)
            result.push(root.val);
            dfs(root.right)
        }
    }

    dfs(root)

    return result
};


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    const result = [];

    const dfs = (root) => {
        if (root) {
            dfs(root.left);
            dfs(root.right);
            result.push(root.val);
        }
    }

    dfs(root);

    return result;
};

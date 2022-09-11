/**
 * @param {TreeNode} root
 * @return {boolean}
 * @label 待复习
 */
var isValidBST = function (root) {
    let preVal = -Infinity; // 初始化为负无穷

    const bfs = (root) => {
        if (!root) return true // 空树是二叉搜索树

        if (root.left && !bfs(root.left)) return false// 如果左子树存在且不是二叉搜索树
        if (root.val <= preVal) return false
        preVal = root.val
        if (root.right && !bfs(root.right)) return false // 如果右子树存在且不是二叉搜索树

        return true // 如果执行到这一步，说明是一颗二叉搜索树
    }

    return bfs(root)
};
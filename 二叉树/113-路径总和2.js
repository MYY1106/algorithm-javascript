/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 * @see {@link https://leetcode.cn/problems/path-sum-ii}
 * @method 递归遍历 
 * @key 由于pathArr没有做优化，内存消耗大
 */
var pathSum = function (root, targetSum) {
    const paths = []
    const dfs = (root, count, pathArr) => {
        if (!root) return;

        count += root.val;
        pathArr.push(root.val)

        if (!root.left && !root.right && count === targetSum) return paths.push(pathArr)
        if (!root.left && !root.right) return;

        if (root.left) dfs(root.left, count, pathArr.slice())
        if (root.right) dfs(root.right, count, pathArr.slice())
    }

    dfs(root, 0, [])

    return paths
};


/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 * @see {@link https://leetcode.cn/problems/path-sum-ii}
 * @method 递归遍历+回溯
 * @key 对pathArr利用回溯优化了一下
 */
var pathSum = function (root, targetSum) {
    const paths = [];

    const dfs = (root, count, pathArr) => {
        if (!root) return;

        count += root.val;
        pathArr.push(root.val)

        if (!root.left && !root.right && count === targetSum) paths.push([...pathArr]) // 这里必须浅拷贝一下，不然放进paths里的数组引用会是一样的

        if (root.left) dfs(root.left, count, pathArr)
        if (root.right) dfs(root.right, count, pathArr)

        pathArr.pop() // 这里必须pop，因为要回到父节点重新开启另一条路径
    }

    dfs(root, 0, [])

    return paths
};
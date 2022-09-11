/**
 * @param {TreeNode} root
 * @return {number}
 * @see {@link https://leetcode.cn/problems/minimum-absolute-difference-in-bst}
 * @method 递归中序遍历
 */
var getMinimumDifference = function (root) {
    let minNum = Infinity;
    let preVal;

    const dfs = (root) => {
        if (!root) return;

        root.left && dfs(root.left);

        minNum = Math.min(minNum, root.val - preVal);
        preVal = root.val;

        root.right && dfs(root.right);
    }

    dfs(root);

    return minNum;
};


/**
 * @param {TreeNode} root
 * @return {number}
 * @see {@link https://leetcode.cn/problems/minimum-absolute-difference-in-bst}
 * @method 迭代中序遍历
 */
var getMinimumDifference = function (root) {
    if (!root) return; // 如果是一个空数组，直接返回（root为[]时，类型转换就会被转成false）

    const stack = [root];
    let minNum = Infinity;
    let preVal;
    let node;

    while (stack.length) {
        node = stack.pop();
        if (!node) { // 如果是null 说明后面一个节点是中间节点
            node = stack.pop()
            if (preVal !== undefined) minNum = Math.min(node.val - preVal, minNum);
            preVal = node.val;
        } else {
            node.right && stack.push(node.right);
            stack.push(node);
            stack.push(null); // 利用null去标记后面一个节点是中间节点
            node.left && stack.push(node.left);
        }
    }

    return minNum;
}
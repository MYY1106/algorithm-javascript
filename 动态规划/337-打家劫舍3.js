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
 * @see {@link https://leetcode.cn/problems/house-robber-iii}
 * @see {@link https://leetcode.cn/problems/house-robber-iii/solution/san-chong-fang-fa-jie-jue-shu-xing-dong-tai-gui-hu/}
 * @label 递归遍历
 * @key rob多次重复的子树，所以会超时
 */
var rob = function (root) {
    if (!root) return 0;

    let money = root.val;

    if (root.left) {
        money += rob(root.left.left) + rob(root.left.right);
    }
    if (root.right) {
        money += rob(root.right.left) + rob(root.right.right);
    }

    return Math.max(money, rob(root.left) + rob(root.right));
};


/**
 * @param {TreeNode} root
 * @return {number}
 * @see {@link https://leetcode.cn/problems/house-robber-iii}
 * @see {@link https://leetcode.cn/problems/house-robber-iii/solution/san-chong-fang-fa-jie-jue-shu-xing-dong-tai-gui-hu/}
 * @label 递归遍历
 * @key 利用memo记忆化
 * @complexity 时间复杂度：O(n)  空间复杂度：O(log n)
 */
var rob = function (root) {
    const memo = new Map();

    return _rob(root);

    function _rob (root) {
        if (!root) return 0;

        if (memo.has(root)) return memo.get(root); // 如果memo里有计算过该子树的结果，直接返回

        let money = root.val;

        if (root.left) {
            money += _rob(root.left.left) + _rob(root.left.right);
        }
        if (root.right) {
            money += _rob(root.right.left) + _rob(root.right.right);
        }

        const result = Math.max(money, _rob(root.left) + _rob(root.right));

        memo.set(root, result); // 存入memo中
        return result;
    }
};


/**
 * @param {TreeNode} root
 * @return {number}
 * @see {@link https://leetcode.cn/problems/house-robber-iii}
 * @see {@link https://leetcode.cn/problems/house-robber-iii/solution/san-chong-fang-fa-jie-jue-shu-xing-dong-tai-gui-hu/}
 * @label 递归遍历
 * @key 为什么解法三比解法二快？ 是因为，解法三和解法二看似时间复杂度都是O(n)，但是解法二比解法三多了很多函数调用，在函数调用过程中，压栈出栈需要消耗性能，
 */
var rob = function (root) {
    return Math.max(...dfs(root));

    function dfs (root) {
        if (!root) return [0, 0]; // 空节点，直接返回[0, 0]

        const left = dfs(root.left); // 遍历左子树
        const right = dfs(root.right); // 遍历右子树

        const unStole = Math.max(...left) + Math.max(...right); // 不偷root节点能得到的最大金额 = root的左子树偷与不偷中的最大金额 + root的右子树偷与不偷中的最大金额
        const stole = root.val + left[0] + right[0]; // 偷root节点能得到的最大金额 = root的金额 + root的左子树不偷的最大金额 + root的右子树不偷的最大金额

        return [unStole, stole];
    }
};
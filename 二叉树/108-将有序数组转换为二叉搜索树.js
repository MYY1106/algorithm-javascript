/**
 * @param {number[]} nums
 * @return {TreeNode}
 * @see {@link https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree}
 * @method 递归遍历
 * @key 其实这里不用强调平衡二叉搜索树，数组构造二叉树，构成平衡树是自然而然的事情，因为大家默认都是从数组中间位置取值作为节点元素，一般不会随机取，所以想构成不平衡的二叉树是自找麻烦。
 */
var sortedArrayToBST = function (nums) {
    const traversal = (left, right) => {
        if (left > right) return null; // left 大于 right 说明是空节点

        const mid = Math.floor(left + (right - left) / 2);
        const root = new TreeNode(nums[mid]);
        root.left = traversal(left, mid - 1);
        root.right = traversal(mid + 1, right);

        return root;
    }

    return traversal(0, nums.length - 1);
};
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * @see {@link https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree}
 * @method 迭代遍历（其实这里没有中节点的处理逻辑，遍历顺序无所谓了）
 * @key 利用二叉搜索树的性质，如果cur.val是在p.val和q.val之间，那么就说明cur是最近公共祖先
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root) return null
   
    let cur = root;
  
    while (cur) {
        if (cur.val > p.val && cur.val > q.val)
            cur = cur.left;
        else if (cur.val < p.val && cur.val < q.val)
            cur = cur.right;
        else
            return cur
    }
};


/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * @see {@link https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree}
 * @method 递归遍历（其实这里没有中节点的处理逻辑，遍历顺序无所谓了）
 * @key 利用二叉搜索树的性质，如果cur.val是在p.val和q.val之间，那么就说明cur是最近公共祖先
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root) return null

    if (root.val > q.val && root.val > p.val)
        return lowestCommonAncestor(root.left, p, q);
    else if (root.val < q.val && root.val < p.val)
        return lowestCommonAncestor(root.right, p, q);
    else
        return root;
};
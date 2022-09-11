/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * @see {@link https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree}
 * @see {@link https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/solution/236-er-cha-shu-de-zui-jin-gong-gong-zu-xian-hou-xu/}
 * @method 递归后序遍历 
 * @key 「后序遍历」是这样一种特殊的深度优先遍历，「一层一层向上传递东西，在根结点汇总」
 * @label 待复习
 */
var lowestCommonAncestor = function (root, p, q) {
    // 若是遍历到null了返回
    // 若是遍历到p或者q就直接返回，无需遍历其子树
    if (root === null || root === p || root === q) return root;

    const left = lowestCommonAncestor(root.left, p, q); // 左
    const right = lowestCommonAncestor(root.right, p, q); // 右
    if (left !== null && right === null) return left; // 当right空，left不空，说明p q都不在root的右子树中，直接返回left
    else if (left === null && right !== null) return right; // 当left空，right不空，说明p q都不在root的左子树中，直接返回right
    else if (left && right) return root; // 若都不为空，说明root的子树包含p和q，即root是p和q的祖先，所以直接返回root
    else return null; // right和left都为空，说明root的子树不包含p和q，所以直接返回null
};
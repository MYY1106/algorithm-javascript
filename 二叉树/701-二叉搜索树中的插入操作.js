/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    if (!root) return new TreeNode(val, null, null);
    let cur = root;
    while (cur) {
        if (cur.val > val) {
            if (cur.left) {
                cur = cur.left;
            }
            else {
                cur.left = new TreeNode(val, null, null);
                cur = null;
            }
        }
        else if (cur.val < val) {
            if (cur.right) {
                cur = cur.right;
            }
            else {
                cur.right = new TreeNode(val, null, null);
                cur = null;
            }
        }
    }
    return root;
};
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    let prev = -Infinity;

    return traversal(root);

    function traversal (root) {
        if (!root) return true;

        if (!traversal(root.left)) return false;
        if (prev >= root.val) return false;
        prev = root.val;
        if (!traversal(root.right)) return false;

        return true;
    }
};
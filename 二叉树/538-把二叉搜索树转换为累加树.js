/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * @see {@link https://leetcode.cn/problems/convert-bst-to-greater-tree/}
 * @see {@link https://programmercarl.com/0538.%E6%8A%8A%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E8%BD%AC%E6%8D%A2%E4%B8%BA%E7%B4%AF%E5%8A%A0%E6%A0%91.html}
 * @method 迭代中序遍历
 * @key 主要就是要知道它的累加是怎么累加的就行了
 */
var convertBST = function (root) {
    if (!root) return root;

    const stack = [root];
    let preVal = 0;
    let node;

    while (stack.length) {
        node = stack.pop();

        if (!node) {
            node = stack.pop();
            node.val += preVal;
            preVal = node.val;
        } else {
            node.left && stack.push(node.left);
            stack.push(node);
            stack.push(null);
            node.right && stack.push(node.right);
        }
    }
    return root;
};
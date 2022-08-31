/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 * @key 套模板即可
 * @see {@link https://github.com/sl1673495/leetcode-javascript/issues/30}
 */
var connect = function (root) {
    if (!root) return root;

    const queue = [root];
    let now, prev;

    while (queue.length) {
        const n = queue.length;
        for (let i = 0; i < n; i++) {
            now = queue.shift();
            if (prev) prev.next = now;
            prev = now
            now.left && queue.push(now.left);
            now.right && queue.push(now.right);

        }
        prev.next = null
        prev = null
    }

    return root;
}
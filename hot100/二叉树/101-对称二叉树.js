/**
 * @param {TreeNode} root
 * @return {boolean}
 * @key 
 * @method 
 */
var isSymmetric = function (root) {
    if (!root) return true;

    return bfs(root.left, root.right);

    function bfs (left, right) {
        if (!left && !right) return true; // 如果都是 null
        if (!left ^ !right) return false; // 如果一个是null，一个不是null            
        if (left.val !== right.val) return false;

        return bfs(left.left, right.right) && bfs(left.right, right.left);
    };
};


/**
 * @param {TreeNode} root
 * @return {boolean}
 * @key 
 * @method 
 */
var isSymmetric = function (root) {
    if (!root) return false;

    const queue = [root.left, root.right];

    while (queue.length) {
        const left = queue.shift();
        const right = queue.shift();

        if (!left && !right) continue; // 如果都是 null
        if (!left ^ !right) return false; // 如果一个是null，一个不是null 
        if (left.val !== right.val) return false;

        queue.push(left.left, right.right);
        queue.push(left.right, right.left);
    }

    return true;
};
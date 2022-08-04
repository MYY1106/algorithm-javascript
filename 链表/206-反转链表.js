/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * @method 双指针
 * @ref 思路具体看这里：https://programmercarl.com/0206.%E7%BF%BB%E8%BD%AC%E9%93%BE%E8%A1%A8.html#%E6%80%9D%E8%B7%AF
 */
var reverseList = function (head) {
    let prev = null, cur = head;
    while (cur !== null) {
        const tmp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = tmp;
    }
    return prev
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 * @method 递归
 * @ref 思路与双指针是差不多的，就是将while写成递归形式
 */
var reverseList = function (head) {
    const reverse = (head, prev) => {
        if (!head) return prev
        const tmp = head.next;
        head.next = prev;
        return reverse(tmp, head)
    }

    return reverse(head, null)
};
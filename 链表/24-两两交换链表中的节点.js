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
 * @ref https://leetcode.cn/problems/swap-nodes-in-pairs/solution/bi-jiao-zhi-jie-gao-xiao-de-zuo-fa-han-tu-jie-by-w/
 */
var swapPairs = function (head) {
    const newHead = new ListNode(0, head)
    let prev = newHead;
    let cur = newHead.next;
    while (cur || cur.next) {
        prev.next = cur.next;
        cur.next = prev.next.next
        prev.next.next = cur;

        prev = cur
        cur = cur.next
    }
    return newHead.next
};
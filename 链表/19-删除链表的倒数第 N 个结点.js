/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * @see {@link https://leetcode.cn/problems/remove-nth-node-from-end-of-list}
 * @see {@link https://leetcode.cn/problems/remove-nth-node-from-end-of-list/solution/dong-hua-tu-jie-leetcode-di-19-hao-wen-ti-shan-chu/}
 * @label 已复习*1 待复习*2
 */
var removeNthFromEnd = function (head, n) {
    const newHead = new ListNode(0, head); // 虚拟头节点
    let slow = newHead, fast = newHead;

    /** @description 移动fast */
    for (let i = 0; i < n + 1; i++)
        fast = fast.next;

    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;

    return newHead.next;
};
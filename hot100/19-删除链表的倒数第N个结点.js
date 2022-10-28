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
 */
var removeNthFromEnd = function (head, n) {
    const newHead = new ListNode(0, head);

    let left = newHead, right = newHead;
    let i = 0;

    while (i !== n + 1) {
        right = right.next;
        i++;
    }

    while (right?.next) {
        right = right.next;
        left = left.next;
    }

    left.next = left.next.next;

    return head
};

console.log(removeNthFromEnd([1, 2], 2));
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let tmp = 0;
    const sumList = new ListNode(); // 有头结点
    let sumNode = sumList;
    let node1 = l1, node2 = l2;

    while (node1 || node2) {

        const sum = (node1?.val ?? 0) + (node2?.val ?? 0) + tmp;

        if (sum > 9) {
            tmp = 1;
            sumNode.next = new ListNode(sum - 10);
        } else {
            tmp = 0;
            sumNode.next = new ListNode(sum);
        }

        sumNode = sumNode.next;
        node1 = node1?.next;
        node2 = node2?.next;
    }

    if (tmp === 1) sumNode.next = new ListNode(1);

    return sumList.next;
};
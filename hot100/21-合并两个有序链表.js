/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * @see {@link https://leetcode.cn/problems/merge-two-sorted-lists}
 * @label 迭代 链表
 */
var mergeTwoLists = function (list1, list2) {
    const head = new ListNode(0, list1);
    let prevNode = head;
    let node1 = list1, node2 = list2;

    while (node1 && node2) {
        if (node1.val > node2.val) {
            prevNode.next = node2;
            node2 = node2.next;
            prevNode.next.next = node1;
            prevNode = prevNode.next;
        } else {
            node1 = node1.next;
            prevNode = prevNode.next;
        }
    }

    if (node2) {
        prevNode.next = node2;
    }

    return head.next;
};


/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * @see {@link https://leetcode.cn/problems/merge-two-sorted-lists}
 * @see {@link https://leetcode.cn/problems/merge-two-sorted-lists/solution/hua-jie-suan-fa-21-he-bing-liang-ge-you-xu-lian-bi/}
 * @label 递归 链表
 */
var mergeTwoLists = function (list1, list2) {
    if (list1 === null) {
        return list2
    } else if (list2 === null) {
        return list1
    } else if (list1.val > list2.val) {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    } else {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
};
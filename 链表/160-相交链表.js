/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * @method 双指针
 * @ref https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/solution/mian-shi-ti-0207-lian-biao-xiang-jiao-sh-b8hn/
 */
var getIntersectionNode = function (headA, headB) {
    let A = headA, B = headB;
    while (A !== B) { // 这里比较的是对象的引用，而不是具体的值
        A = A ? A.next : headB; // next是否有值，没有就开始走B
        B = B ? B.next : headA; // next是否有值，没有就开始走A
    }
    return A;
};
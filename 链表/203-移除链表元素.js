/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * @method 设置一个虚拟头结点 (自己想的 但是可以继续做优化)
 */
var removeElements = function (head, val) {
    const newHead = new ListNode(0, head)
    let item = newHead, preItem;
    while (item.next !== null) {
        preItem = item
        item = item.next
        if (item.val === val) {
            preItem.next = item.next
            item = preItem
        }
    }

    return newHead.next
};

/** @description 优化 */
var removeElements = function (head, val) {
    const newHead = new ListNode(0, head)
    let item = newHead;
    while (item.next !== null) {
        if (item.next.val === val) {
            item.next = item.next.next
        } else {
            item = item.next
        }
    }
    return newHead.next
};
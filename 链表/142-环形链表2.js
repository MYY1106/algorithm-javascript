/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * @method 双指针
 * @ref https://leetcode.cn/problems/linked-list-cycle-ii/solution/linked-list-cycle-ii-kuai-man-zhi-zhen-shuang-zhi-/
 * 总结：
 * f = 2s （快指针每次2步，路程刚好2倍）
 * f = s + nb (相遇时，刚好多走了n圈）
 * 推出：s = nb
 * 从head结点走到入环点需要走: a + nb，而slow已经走了nb，那么slow再走a步就是入环点了。
 * 如何知道slow刚好走了a步？ 从head开始，随便一个指针（这里就用fast指针）和slow指针一起走，相遇时刚好就是a步
 */
var detectCycle = function (head) {
    let fast = head, slow = head;
    do {
        if (fast?.next?.next) fast = fast.next.next
        else return null
        slow = slow.next;
    } while (fast !== slow);
    fast = head;
    while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};
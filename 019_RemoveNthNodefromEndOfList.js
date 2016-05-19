/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var pre_head = new ListNode(0);
    pre_head.next = head;
    var fast_head = pre_head;
    var slow_head = pre_head;
    for(var i = 0; i < n; i++) {
        fast_head = fast_head.next;
        if(fast_head == null) {
            return pre_head.next;
        }
    }
    while(fast_head.next != null) {
        fast_head = fast_head.next;
        slow_head = slow_head.next;
    }
    slow_head.next = slow_head.next.next;
    return pre_head.next;
};
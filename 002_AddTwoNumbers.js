/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var head = new ListNode(0);
    var prev = head;
    var carry_over = 0;
    while(l1 != null || l2 != null) {
        var curr_val =  (l1 != null ? l1.val : 0) + (l2 != null ? l2.val : 0) + carry_over;
        carry_over = 0;
        if(curr_val >= 10) {
            curr_val = curr_val - 10;
            carry_over = 1;
        }
        var curr_node = new ListNode(curr_val);
        prev.next = curr_node;
        prev = curr_node;
        if(l1 != null) {
            l1 =  l1.next;
        }
        if(l2 != null) {
            l2 =  l2.next;
        }
    }
    if(carry_over > 0) {
        prev.next = new ListNode(carry_over);
    }
    return head.next;
};
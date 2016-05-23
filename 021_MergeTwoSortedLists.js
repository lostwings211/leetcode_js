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
var mergeTwoLists = function(l1, l2) {
    var pre_head = new ListNode(0);
    var curr_head = pre_head;
    while(l1 != null || l2 != null) {
        if(l1 != null && l2 != null) {
            if(l1.val <= l2.val) {
                curr_head.next = l1;
                l1 = l1.next;
            }
            else {
                curr_head.next = l2;
                l2 = l2.next;
            }
            curr_head = curr_head.next;
        }
        else if(l1 != null) {
            curr_head.next = l1;
            l1 = null;
        }
        else if(l2 != null) {
            curr_head.next = l2;
            l2 = null;
        }
    }
    return pre_head.next;
};
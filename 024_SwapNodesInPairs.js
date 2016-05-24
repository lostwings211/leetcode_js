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
 */
var swapPairs = function(head) {
    var pre_head = new ListNode(0);
    pre_head.next = head;
    var curr_head = pre_head;
    while(curr_head.next != null && curr_head.next.next != null) {
        var end_node = curr_head.next.next.next;
        var next_node = curr_head.next;
        var next_next_node = curr_head.next.next;

        curr_head.next = next_next_node;
        next_next_node.next = next_node;
        next_node.next = end_node;
        curr_head = next_node
    }
    return pre_head.next;
};
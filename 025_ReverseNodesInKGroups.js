/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(k == 1) {
        return head;
    }
    var pre_head = new ListNode(0);
    pre_head.next = head;
    var curr_head = pre_head;
    var curr_head_k = moveKforward(curr_head, k);
    while(curr_head_k != null) {
        var prev = curr_head;
        var curr = prev.next;
        var new_start = null
        var new_end = null;
        for(i = 0; i < k; i++) {
            var temp = curr.next;
            if(i == 0) {
                curr.next = curr_head_k.next;
                new_end = curr;
            }
            else {
                if(i == k - 1) {
                    new_start = curr;
                }
                curr.next = prev;
            }
            prev = curr;
            curr = temp;
        }
        curr_head.next = new_start;
        curr_head = new_end;
        curr_head_k = moveKforward(curr_head, k);
    }
    return pre_head.next;
};

var moveKforward = function(head, k) {
    var i = 0;
    var curr = head;
    while(curr != null && i < k) {
        curr = curr.next;
        i++;
    }
    return curr;
}
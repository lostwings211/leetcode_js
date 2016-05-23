/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length == 0) {
        return null;
    }
    if(lists.length == 1) {
        return lists[0];
    }
    if(lists.length == 2) {
        return mergeTwoLists(lists[0], lists[1]);
    }
    var mid =  Math.ceil(lists.length / 2);
    var binary_list =  [];
    binary_list.push(mergeKLists(lists.slice(0, mid)));
    binary_list.push(mergeKLists(lists.slice(mid, lists.length)));
    return mergeKLists(binary_list);
};

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
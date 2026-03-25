/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // let seenNodes = new Set();
    // let curr = head;
    // while(curr) {
    //     if (seenNodes.has(curr)) return true;
    //     seenNodes.add(curr)
    //     curr = curr.next;
    // }
    // return false;


//FLOYD's :

    // let slow = fast = head;
    // while (fast && fast.next) {
    //     slow = slow.next;
    //     fast = fast.next.next;
    //     if(slow == fast) return true
    // }
    // return false;
    if(!head) return false
    let s = head;
    let f = head.next
    while(s!=f) {
        if(!f || !f.next) return false;
        s = s.next;
        f=f.next.next
    }
    return true;
    
};
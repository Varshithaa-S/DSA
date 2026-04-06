/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // if(!head) return head;

    // let sentinal = new ListNode();
    // sentinal.next = head;
    // let prev = i = j = sentinal;
    // // let
    // while(prev.next && prev.next.next) {
    //     i=i.next;
    //     j=i.next;
    //     let temp = j.next;
    //     j.next = i;
    //     i.next = temp;
    //     prev.next = j;
    //     prev = i;
    // }
    // return sentinal.next;
    
    //recursion
    if(!head || !head.next) return head;
    let l = head;
    let r = head.next;
    
    l.next = swapPairs(r.next);
    r.next = l;
    return r
};
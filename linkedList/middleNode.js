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
var middleNode = function(head) {
    // let curr1 = head;
    // let size =0 ;
    // while(curr1 !== null) {
    //     size++;
    //     curr1 = curr1.next;

    // }
    // let index = Math.floor(size / 2);
    // for (let i =0; i< index; i++) {
    //     curr = curr.next;
    // } 
    // head = curr
    // return head;
    let s = f = head;
    while(f && f.next) {
        s = s.next;
        f = f.next.next;
    }
    return s;
    
};
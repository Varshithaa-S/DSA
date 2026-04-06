/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // let c=0
    // let curr1=head;
    // while(curr1) {
    //     curr1=curr1.next
    //     c++;
    // }
    // k = k%c;
    // // if(!head || !head.next) return head
    // let count =0 ;
    // // let start = head;
    // while(count<k) {
    //     let curr = head;
    //     while(curr.next) {
    //         if(!curr.next.next) break;
    //         curr = curr.next
    //     }
    //     curr.next.next = head;
    //     head = curr.next;
    //     curr.next = null;
    //     count++;
    // }
    // return head;
    if(!head || !head.next) return head;
    let s = head;
    let f = head;

    let c=0
    let curr1=head;
    while(curr1) {
        curr1=curr1.next
        c++;
    }
    k = k%c;

    for (let i=0;i<k;i++) {
        f = f.next
    }
    while(s && f.next) {
        f=f.next;
        s=s.next;
    }
    f.next = head;
    head=s.next;
    s.next=null

    return head;
};
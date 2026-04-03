/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
 }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(!head || !head.next) return head;
    let odd  = head;
    let even = head.next;
    let start = even;
    while(odd.next && even.next) {
        odd.next = odd.next.next;
        even.next = even.next.next
        odd = odd.next;
        even = even.next;
    }
    odd.next = start
    return head;
};


let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
oddEvenList(head)
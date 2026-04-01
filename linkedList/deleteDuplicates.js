/**
 * Definition for singly-linked list.
 */

 function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    // let sentinal = new ListNode();
    let curr = head;
    while(curr && curr.next){
        if(curr.val == curr.next.val) curr.next=curr.next.next
        else curr = curr.next
    }
    return head

};

let head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);
deleteDuplicates(head)

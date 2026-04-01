// /**
//  * Definition for singly-linked list.
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
//  */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // let sentinal = new ListNode();
    // sentinal.next = head;
    // let length = 0;
    // while(head) {
    //     head = head.next;
    //     length++;
    // }
    // let prev = sentinal;
    // for(let i=0;i<length-n;i++){
    //     prev = prev.next
    // }
    // prev.next = prev.next.next
    // return sentinal.next;


        let sentinal  = new ListNode();
        sentinal.next = head
    let slow = fast = sentinal;
    for(let i=0;i<n;i++) {
        // if(fast)
        fast = fast.next;
        console.log(fast)
    }
    while(fast.next){
        fast = fast.next;
        slow = slow.next
    }
    // if(slow.next)
    slow.next = slow.next.next;
    return sentinal.next;
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
removeNthFromEnd(head,2)
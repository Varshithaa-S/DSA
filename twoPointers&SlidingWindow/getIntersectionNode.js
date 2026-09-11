/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // let set = new Set();
    // while(headB) {
    //     set.add(headB);
    //     headB = headB.next;
    // }
    // while(headA) {
    //     if(set.has(headA)) return headA
    //     headA = headA.next;
    // }
    // return null;


    //===============USING TWO POINTERS

    // let n=0;
    // let pA = headA;
    
    // while(pA) {
    //     n++;
    //     pA = pA.next
    // }

    // let m=0;
    // let pB = headB
    // while(pB) {
    //     m++;
    //     pB = pB.next;
    // }

    // let diff = Math.abs(n-m)
    // if(n>m) {
    //     let temp = headA;
    //     headA = headB;
    //     headB = temp;
    // }
    // for(let i=0;i<diff;i++) {
    //     headB = headB.next;
    // }

    // pA = headA;
    // pB = headB;

    // while(pA != pB) {
    //     pA = pA.next;
    //     pB = pB.next;
    // }
    // return pA;


    let pA = headA;
    let pB = headB;

    while(pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null? headA : pB.next;
    }
    return pA


    
};
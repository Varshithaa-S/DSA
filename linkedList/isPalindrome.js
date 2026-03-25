/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let s=f=head;
    while (f && f.next) {
        s=s.next;
        f= f.next.next
    }
    let curr =s;
    let prev = null;
    while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp
    }

    let firstList = head;
    let secondList = prev;
    while(secondList) {
        if (firstList.val != secondList.val) return false; //compare it with the value alwaysssss
        firstList = firstList.next;
        secondList = secondList.next;
    }
    return true;
};
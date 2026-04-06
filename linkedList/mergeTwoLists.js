/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// var mergeTwoLists = function(list1, list2) {
//     if(!list1) return list2;
//     if(!list2) return list1; 
//     let newList = new ListNode();
//     curr = newList;
//     // if(!list1 && !list2) return list1;
//     while(list1 || list2) {
//         if(!list1) {
//             curr.next = new ListNode(list2.val);
//             curr = curr.next;
//             list2 = list2.next;
//         } else if (!list2) {
//             curr.next = new ListNode(list1.val);
//             curr = curr.next;
//             list1 = list1.next;
//         }
//         else if(list1.val == list2.val) {
//             curr.next = new ListNode(list1.val);
//             curr = curr.next;
//             curr.next = new ListNode(list2.val);
//             curr = curr.next;
//             list1 = list1.next;
//             list2 = list2.next
//         } else if (list1.val < list2.val) {
//             curr.next = new ListNode(list1.val);
//             curr = curr.next;
//             list1 = list1.next;
//         } else {
//             curr.next = new ListNode(list2.val);
//             curr = curr.next;
//             list2 = list2.next;
//         }
//     }
//     return newList.next;
// };
var mergeTwoLists = function(list1, list2) {
    let newList = new ListNode();
    curr = newList;
    while(list1 && list2) {
         if (list1.val < list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;

    }
    if(!list1) curr.next = list2;
    if(!list2) curr.next = list1
    return newList.next;
};
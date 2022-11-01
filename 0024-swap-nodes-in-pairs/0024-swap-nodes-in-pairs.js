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
const swapPairs = (head) => {
    // edge cases
    if(!head || !head.next) return head;
    // create a dummy node to start
    let dummy = new ListNode(-Infinity, head);
    // in place reversal of a linkedlist algo
    let [p, c, n] = [dummy, head, head.next];
    while(n) {
     // swap values to place the next node after the previous   
     c.next = n.next;
     n.next = c;
     p.next = n;   
     // iterate the pointers   
     p = c;
     c = c.next;  
     // deal with edge case where the list end may have been reached early   
     if(c) {
         n = c.next;
     } else {
         break;
     }      
    }
    return dummy.next;
};
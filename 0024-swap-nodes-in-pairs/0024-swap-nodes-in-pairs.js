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
    if(!head || !head.next) return head;
    let dummy = new ListNode(-Infinity, head);
    let [p, c, n] = [dummy, head, head.next];
    while(n) {
     c.next = n.next;
     n.next = c;
     p.next = n;   
     p = c;
     c = c.next;  
     if(c) {
         n = c.next;
     } else {
         break;
     }      
    }
    return dummy.next;
};
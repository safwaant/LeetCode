/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head, val) => {
   let dummy = new ListNode(-Infinity, head); 
   let prev = dummy, cur = head;
   while(cur) {
       if(cur.val !== val) {
          prev.next = cur;
          prev = cur;          
       }
       cur = cur.next;
       
   } 
   prev.next = cur;
   return dummy.next; 
};
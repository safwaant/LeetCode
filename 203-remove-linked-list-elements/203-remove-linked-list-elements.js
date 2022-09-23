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
   // dummy node in case of beginning nodes being the value 
   let dummy = new ListNode(-Infinity, head); 
   // two pointers prev is one step behind cur 
   let prev = dummy, cur = head;
   while(cur) {
       // cur found a value that will be in the final list
       if(cur.val !== val) {
          prev.next = cur;
          prev = cur;          
       }
       cur = cur.next;
       
   } 
   // in case last value is = the value needed to be removed 
   prev.next = cur;
   return dummy.next; 
};
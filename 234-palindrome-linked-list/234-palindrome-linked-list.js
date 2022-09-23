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
let isPalindrome = (head) => {
  const reverse = (node) => {
    let [p, c, n] = [null, node, null];
    while(c) {
        n = c.next;
        c.next = p;
        p = c;
        c = n;
    } 
    return p;  
  }  
    
    
  let [slow, fast] = [head, head];
  while(fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }  
  let r = reverse(slow), l = head;
  while(r) {
      if(r.val !== l.val) {
          return false
      }
      r = r.next;
      l = l.next;
  }  
  return true  
};
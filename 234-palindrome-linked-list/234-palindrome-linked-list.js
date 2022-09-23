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
  // in place reversal of a linkedlist  
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
    
  // find the middle of the list  
  let [slow, fast] = [head, head];
  while(fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  } 
  // find the reversed head of the right end of the list  
  let r = reverse(slow), l = head;
  // normal palindrome comparison  
  while(r) {
      if(r.val !== l.val) {
          return false
      }
      r = r.next;
      l = l.next;
  }  
  return true  
};
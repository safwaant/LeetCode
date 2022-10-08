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
const deleteMiddle = (head) => {
    if(!head.next) return null;
    let [prev, slow, fast] = [null, head, head];
    while(fast && fast.next) {
       fast = fast.next.next;
       prev = slow; 
       slow = slow.next; 
    }
    prev.next = slow.next;
    return head;
};
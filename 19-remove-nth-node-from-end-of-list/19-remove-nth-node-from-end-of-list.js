/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
let removeNthFromEnd = (head, n) => {
    let [fast, slow] = [head, head];
    // stagger fast by n distance
    for(let i = 0; i < n; i++) {
        fast = fast.next;
    }
    // edge case for head removal
    if(!fast){
        return head.next;
    }
    // move slow to position of deletion
    while(fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
};
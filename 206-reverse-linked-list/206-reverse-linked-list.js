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
const reverseList = (head) => {
    if (!head) {
        return null;
    }
    let [c, p, n] = [head, null, null];
    while (c) {
        n = c.next;
        c.next = p;
        p = c;
        c = n;
    }
    head = p;
    return head;
};
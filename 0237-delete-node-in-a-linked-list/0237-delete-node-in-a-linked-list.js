/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = (node) => {
    let [l, r] = [node, node.next];
    while(r) {
        const temp = r.val;
        r.val = l.val;
        l.val = temp;
        r = r.next;
        if(r) {
            l = l.next;   
        }
    }
    l.next = r;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const pq = new MinPriorityQueue();
    const inOrder = (root) => {
        if(!root){
            return;
        }
        inOrder(root.left);
        pq.enqueue(root.val);
        inOrder(root.right);
    }
    inOrder(root);
    for(let i = 1; i < k; i++) {
        pq.dequeue();
    }
    return pq.front().element;
};
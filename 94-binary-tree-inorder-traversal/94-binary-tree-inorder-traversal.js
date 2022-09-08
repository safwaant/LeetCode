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
 * @return {number[]}
 */
let inorderTraversal = (root) => {
    let res = [];
    const inOrder = (root) => {
        if(root) {
           inOrder(root.left);
           res.push(root.val);
           inOrder(root.right); 
        }
    }
    inOrder(root);
    return res;
};
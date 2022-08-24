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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// Approach 2
let flatten = (root) => {
   let prev = null; 
   const dfs = root => {
     // flatten the ROOT tree by keeping track of a previous pointer
     if(!root) {
         return null;
     }
     dfs(root.right);  
     dfs(root.left);
     
     root.right = prev;
     root.left = null;
     prev = root;    
   } 
   dfs(root);     
};

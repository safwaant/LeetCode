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
// Approach 1
var flatten = function(root) {
   let arr = [];
   const preOrder = (root) => {
      if(!root) return; 
      arr.push(root.val);
      preOrder(root.left);
      preOrder(root.right); 
   };
   preOrder(root);
   if(arr.length === 0) {
       return arr;
   }
   root.right = null;
   root.left = null;
   let cur = root; 
   for(let i = 1; i < arr.length; i++) {
       cur.right = new TreeNode(arr[i]);
       cur = cur.right;
   } 
   return root; 
};

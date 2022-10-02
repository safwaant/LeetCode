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
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoBST = (root, val) => {
   if(!root) {
      root = new TreeNode(val);
      return root; 
   } 
   let [prev, cur] = [null, root];
   while(cur) { 
      prev = cur; 
      if(val < cur.val) {
         cur = cur.left; 
      } else if(val > cur.val) {
         cur = cur.right; 
      }
   }
   if(prev.val > val) {
       prev.left = new TreeNode(val);
   } else {
      prev.right = new TreeNode(val); 
   }
   return root; 
};
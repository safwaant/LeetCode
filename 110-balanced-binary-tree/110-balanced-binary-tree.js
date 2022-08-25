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
 * @return {boolean}
 */
let isBalanced = (root) => {
  // dfs soln
  const dfs = (root) => {
    if(!root){
      return 0;  
    }
    // stopping recursion if invalid height  
    let leftH = dfs(root.left);
    if(leftH === -1) return -1;
    let rightH = dfs(root.right);
    if(rightH === -1) return -1;
    
    // doing height checks 
    return Math.abs(leftH - rightH) > 1 ? -1 : Math.max(1 + leftH, 1 + rightH);  
  }
  return dfs(root) != -1;  
};
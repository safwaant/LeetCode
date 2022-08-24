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
var isValidBST = function(root) {
    const checkTree = (root, min, max) => {
      if(!root) {
          return true;
      }
      // use the definition of a BST, all values in left subtree less than the root  
      // and all values in the right subtree greater than the root   
      if(root.val > min && root.val < max) {
          return checkTree(root.left, min, root.val) && checkTree(root.right, root.val, max)
      }  
      return false;  
    };
    // start recursive call with placeholder values for min and max
    return checkTree(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    
};
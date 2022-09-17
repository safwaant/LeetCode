/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
const maxDepth = (root) => {
   if(!root) {
       return 0;
   }  
   let max = 1; 
   for(let i of root.children) {
      max = Math.max(1 + maxDepth(i), max);   
   } 
   return max; 
};
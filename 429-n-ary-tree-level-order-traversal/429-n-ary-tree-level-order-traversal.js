/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
  if(!root) return [];
  let q = [root], res = [];  
  while(q.length !== 0) {
     let level = [], size = q.length;
     for(let i = 0; i < size; i++) {
         const front = q.shift();
         for(let i of front.children) {
            q.push(i); 
         }
         level.push(front.val);
     } 
     res.push(level); 
  }
  return res;  
};
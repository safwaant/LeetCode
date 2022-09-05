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
  // initiate the BFS queue  
  let q = [root], res = [];  
  while(q.length !== 0) {
     // create array to store this levels nodes
     // and size to store this levels size 
     let level = [], size = q.length;
     // iterate through this entire level 
     for(let i = 0; i < size; i++) {
         const front = q.shift();
         // push all n children onto queue
         q.push(...front.children); 
         // add to this current level
         level.push(front.val);
     } 
     // push level onto result 
     res.push(level); 
  }
  return res;  
};

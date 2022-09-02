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
let averageOfLevels = (root) => {
   let q = [root], res = [];
   // BFS for the tree 
   while(q.length !== 0) {
       // the level queue will be the current level 
       let level = [], size = q.length;
       for(let i = 0; i < size; i++) {
           // get each of the current levels values
           const front = q.shift();
           // BFS enqueue
           if(front.left) {
               q.push(front.left);
           }
           if(front.right) {
               q.push(front.right);
           }
           // add to the level array
           level.push(front.val);
       }
       // sum and average the level
       let avg = level.reduce((total, cur) => total + cur) / level.length;
       // add to result
       res.push(avg);
   }
   return res; 
};
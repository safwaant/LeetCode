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
   let q = [], res = [];
   q.push(root);
   while(q.length !== 0) {
       let level = [], size = q.length;
       for(let i = 0; i < size; i++) {
           const front = q.shift();
           if(front.left) {
               q.push(front.left);
           }
           if(front.right) {
               q.push(front.right);
           }
           level.push(front.val);
       }
       
       let avg = level.reduce((total, cur) => total + cur) / level.length;
       res.push(avg);
   }
   return res; 
};
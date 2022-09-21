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
 * @return {number}
 */
const maxLevelSum = (root) => {
   let q = [root], res = 0, cur = -Infinity, levelNum = 0;
   while(q.length !== 0) {
       let size = q.length, level = [];
       for(let i = 0; i < size; i++) {
           const node = q.shift();
           if(node.left) {
              q.push(node.left); 
           }
           if(node.right) {
              q.push(node.right); 
           }
           level.push(node.val);
       }
       levelNum++;
       let temp = level.reduce((total, cur) => total + cur);
       console.log(levelNum + ", " + temp)
       if(temp > cur) {
           cur = temp;
           res = levelNum;
       }
   }
   return res; 
};
/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
   let s = new Set(nums), res = 0;
   for(let i of nums) {
       if(!s.has(i - 1)) {
          let j = i, cur = 0; 
          while(s.has(j)) {
             j++, cur++;    
          } 
          res = Math.max(cur, res) 
       }
   } 
   return res;    
};
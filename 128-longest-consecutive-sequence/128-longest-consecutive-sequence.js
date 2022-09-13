/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
   // hash all values to a set  
   let s = new Set(nums), res = 0;
   for(let i of nums) {
       // we have found the beginning of a sequence
       if(!s.has(i - 1)) {
          // iterate through the sequence 
          let j = i, cur = 0; 
          while(s.has(j)) {
             j++, cur++;    
          } 
          // compare the size of the current sequence
          // to the largest sequence thus far 
          res = Math.max(cur, res) 
       }
   } 
   return res;    
};
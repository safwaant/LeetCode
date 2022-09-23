/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
   let l = 0, r = nums.length - 1;
   let res = [];
   while(l < r) {
      const valL = Math.abs(nums[l]),
            valR = Math.abs(nums[r]);
      if(valL > valR) {
         res.push(valL * valL);
         l++; 
      } else if(valR > valL) {
         res.push(valR * valR);
         r--; 
      } else {
         res.push(valR * valR);
         res.push(valL * valL);
         l++, r--; 
      }
   }
   if(l === r) {
     res.push(nums[r] * nums[r]);   
   } 
   return res.reverse();
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
   // two pointers 
   let l = 0, r = nums.length - 1;
   let res = [];
   while(l < r) {
      // abs since value can be a negative 
      const valL = Math.abs(nums[l]),
            valR = Math.abs(nums[r]);
      // add the larger value to the array 
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
   // edge case 
   if(l === r) {
     res.push(nums[r] * nums[r]);   
   } 
   // array is built in reverse order so reverse it to proper order 
   return res.reverse();
};
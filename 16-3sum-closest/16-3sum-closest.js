/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
   nums.sort((a, b) => a - b);
   let res = -Infinity; 
   for(let i = 0; i < nums.length - 2; i++) { 
      let [l, r] = [i + 1, nums.length - 1];
      while(l < r) {
          const sum = nums[i] + nums[l] + nums[r];
          if(sum > target) {
             r--; 
          } else {
              l++;
          }
          if(Math.abs(sum - target) < Math.abs(res - target)) {
             res = sum; 
          }            
      }  
   }
   return res;    
};
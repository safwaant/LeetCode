/**
 * @param {number[]} nums
 * @return {number}
 */
const repeatedNTimes = (nums) => {
   // each array can be divided into at most length 3 subarrays
   // because of 2n length and n + 1 unique numbers 
   for(let i = 0; i < nums.length - 3; i += 3) {
      // checking to see if it exists in this subarray 
      if(nums[i] === nums[i + 1] || nums[i] === nums[i + 2]) {
         return nums[i]; 
      }  
      if(nums[i + 1] === nums[i + 2]) {
          return nums[i + 1];
      } 
   }
   // a subarray contains all duplicates (
   // since no other subarray containeda pigeon hole 
   return nums[nums.length - 1]; 
};
/**
 * @param {number[]} nums
 * @return {number}
 */
let missingNumber = (nums) => {
    // n log n approach sort and find a number that is 
    // out of place
   nums.sort((a, b) => a - b);
   if(nums[0] !== 0) {
      return 0; 
   } 
   for(let i = 1; i  < nums.length; i++) {
     if(nums[i - 1] + 1 !== nums[i]) {
         return nums[i - 1] + 1;
     }  
   }
    // in case the last number is not in the range
   return nums[nums.length - 1] === nums.length ? -1 : nums.length; 
};
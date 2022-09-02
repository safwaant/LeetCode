/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = (nums) => {
   // maxSum is the local sum, current sum in the sum ending at 
   // a specific position
   let maxSum = nums[0], curSum = Number.MIN_SAFE_INTEGER;
   // kadanes algorithm
   for(let i of nums) {
       // curSum + i -> continue with this subarray
       // i -> start over with new subarray
       curSum = Math.max(curSum + i, i);
       // update the max
       maxSum = Math.max(curSum, maxSum);
   }
   return maxSum; 
};
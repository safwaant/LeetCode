/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numSubarrayProductLessThanK = (nums, k) => {
   // we cant have a product be less than 1 
   if(k <= 1) return 0; 
   // sliding window algorithm 
   let [l, r] = [0, 0], res = 0, prod = 1; 
   while(r < nums.length) {
      // current product is calculated
      // with the current window 
      prod *= nums[r];   
      while(prod >= k) {
         // if product is too great 
         // shrink the window from the left side 
         prod = Math.floor(prod / nums[l]);
         l++; 
      } 
      // TRICK: math trick to find number of subarrays
      // in a single window 
      res += r - l + 1; 
      // expand window 
      r++; 
   }
   return res; 
};
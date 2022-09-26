/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
   let m = {};
   for(let i = 0; i < nums.length; i++) {
     const val = nums[i];
     if(val in m && Math.abs(i - m[val]) <= k) {
        return true; 
     } else {
        m[val] = i; 
     }  
   }
   return false; 
};
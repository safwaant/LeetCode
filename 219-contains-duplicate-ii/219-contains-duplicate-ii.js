/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
   let m = {};
   for(let i = 0; i < nums.length; i++) {
     const val = nums[i];
     // check if the value is already in the map 
     if(val in m && Math.abs(i - m[val]) <= k) {
        return true; 
     } else {
        // value isnt in the map add it to the map
        m[val] = i; 
     }  
   }
   return false; 
};

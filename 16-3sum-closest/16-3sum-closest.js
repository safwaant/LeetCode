/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
   // 3Sum trick is to SORT the array 
   nums.sort((a, b) => a - b); 
   let res = -Infinity; 
   // 3Sum style search first pick a pointer
   // then do Two Sum II style search to find a sum 
   for(let i = 0; i < nums.length - 2; i++) {
      // left and right ptrs for search 
      let [l, r] = [i + 1, nums.length - 1];
      // loop will go until left and right pointers meet 
      // this is because all values must be checked 
      while(l !== r) {
          // current sum
          const sum = nums[i] + nums[l] + nums[r];
          // move ptrs to get a closer sum to target
          if(sum > target) {
             r--; 
          } else {
              l++;
          }
          // abs() is used since the sum can be greater or less than 
          // the target, the difference is what mattters 
          if(Math.abs(sum - target) < Math.abs(res - target)) {
             // we have found a closer sum 
             res = sum; 
          }            
      }  
   }
   return res;    
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
   let res = []; 
   // TRICK sort the array to turn this similar to Two Sum II 
   nums.sort((a, b) => a - b);
   for(let i = 0; i < nums.length - 2; i++) {
      // duplicate value is found skip it 
      if(i > 0 && nums[i] === nums[i - 1]) {
          continue;
      }
      // Two Sum II style binary search approach 
      let l = i + 1, r = nums.length - 1;
      while(l < r) { 
         // current sum  
         const sum = nums[i] + nums[l] + nums[r];
         if(sum > 0) {
             r--;
         } else if(sum < 0) {
             l++; 
         } else { 
             // add the triplet since we've found a sum
             res.push([nums[i], nums[l], nums[r]]);
             // move the left pointer so more triplets can be found
             do {
               l++;  
             // if the left pointer is a duplicate keep moving it     
             // if the right pointer is a duplicate it will move to compensate 
             //  for the left pointer being moved (neetcode explanation is best for this)
             } while(nums[l] === nums[l - 1] && l < r)
         }
          
      } 
   }
   return res;
};
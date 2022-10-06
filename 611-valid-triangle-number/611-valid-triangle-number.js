/**
 * @param {number[]} nums
 * @return {number}
 */
const triangleNumber = (nums) => {
   // important step is to sort first to search 
   nums.sort((a, b) => a - b);
   let res = 0;  
   // 3sum style binary search 
   // start i at 2 because we will look only behind i
   // since we want to maximize our chances of looking at lesser values 
   for(let i = 2; i < nums.length; i++) {
       // binary search the left portion 
       // or the portion to the left of i 
       let [l, r] = [0, i - 1];
       while(l < r) {
           // we have found a valid triangle
           if(nums[l] + nums[r] > nums[i]) {
             // TRICK: all values in the range from l to r
             // will be less than r so they will all form a valid triangle 
             const combos = r - l;
             res += combos;  
             // continue to look for combos  
             r--;
           } else {
              // this triangle needs to be greater to be valid 
              l++; 
           }
       }
   }
   return res; 
};
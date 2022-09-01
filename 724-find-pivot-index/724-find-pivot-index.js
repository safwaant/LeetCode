/**
 * @param {number[]} nums
 * @return {number}
 */
let pivotIndex = (nums) => {
   // edge case return 0   
   if(nums.length <= 1){
      return 0; 
   } 
   
   // calculate the sum
   let r = nums.reduce((prev, cur) => prev + cur, 0);
   let l = 0, piv = 0;
    
   // find the piv values and increment each pointer as needed 
   for(let i = 0, j = 0; i < nums.length; i++){
       piv += nums[i];
       // right sum = left sum
       if(l === r - piv){
         return i;  
       }
       j = i;
       l += nums[j];
   } 
   return -1; 
};
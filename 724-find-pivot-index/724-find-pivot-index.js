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
   let total = nums.reduce((prev, cur) => prev + cur, 0);
   let leftSum = 0, rightSum = 0;
   // calculate the right and left sum and compare
   for(let i = 0; i < nums.length; i++){
       // get the right sum by subtracting all other values
       rightSum = total - nums[i] - leftSum;
       if(rightSum === leftSum) {
           return i;
       }
       // update the left sum with the current value 
       // so it computes the prefix sum
       leftSum += nums[i]; 
   } 
   return -1; 
};
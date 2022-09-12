/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = (nums) => {
  // edge case to throw out  
  if(nums.length === 0 || nums.length === 1){
    return nums;  
  } 
  // slow pointer, i is the fast pointer  
  let j = 1;  
  for(let i = 0; i < nums.length - 1; i++){
     // iterate until is right next to a non duplicate value
     // and j is on the value to be swapped 
     if(nums[i] !== nums[i + 1]){
        // swap values 
        nums[j++] = nums[i + 1];  
     } 
  }  
  return j;  
};
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  // two pointer approach start one pointer at begin of array
  // other pointer at the end of the array  
  for(let i = 0, j = nums.length - 1; i < j;){
    // move j since its not in a position to complete a swap
    if(nums[j] === val){
      j--;  
    } else if(nums[i] === val && nums[j] !== val){
      // j is in a position to complete a swap, swap values
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;  
    } else { 
      // i in not a position to swap move i
      i++;  
    } 
  }
  // counting k for the judging 
  return nums.reduce((k, cur) => {
    return cur !== val ? ++k : k;
  }, 0);
};
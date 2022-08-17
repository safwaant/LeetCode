/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  /*
  * From discuss: Use floyds cycle to get fast and slow pointers
  * to the starting position
  */
  let slow = nums[0], fast = nums[nums[0]];
  while(slow !== fast){
      slow = nums[slow];
      fast = nums[nums[fast]];
  }
  let i = 0  
  while(slow !== i) {
    slow = nums[slow]  
    i = nums[i];   
  }  
  return slow;  
};
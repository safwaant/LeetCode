/**
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = (nums) => {
   nums.sort((a, b) => a - b);
   return nums[Math.floor(nums.length / 2)]; 
};
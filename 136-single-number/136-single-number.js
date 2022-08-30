/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = (nums) => {
   return nums.reduce((total, cur) => total ^= cur);
};
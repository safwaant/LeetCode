/**
 * @param {number[]} nums
 * @return {number}
 */
 let missingNumber = (nums) => {
  // calculate sum of 0 ... n elements with summation formula
  // S n = n * n + 1 / 2 
  let n = Math.floor((nums.length * (nums.length  + 1) / 2));
  // calculate the sum of this array  
  const sum = nums.reduce((total, prev) => total + prev);
  return n - sum; 
};
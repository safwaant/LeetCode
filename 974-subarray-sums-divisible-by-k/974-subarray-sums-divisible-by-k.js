/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraysDivByK = (nums, k) => {
  // a sum of 0 will always exist   
  let m = {0:1}, res = 0, prefixSum = 0;
  for(let i of nums) {
      // increment the prefix sum
      prefixSum += i;
      // mod the prefix sum 
      let rem = prefixSum % k;
      // remove negative remainders so they mod correctly
      if(rem < 0) {
          rem += k;
      }
      // there exists a subarray such that when we modded by k 
      // it has been "consumed" by the % k
      if(rem in m) {
          res += m[rem];
      }
      // add to the map
      m[rem] ? m[rem]++ : m[rem] = 1;
  }
  return res;  
};
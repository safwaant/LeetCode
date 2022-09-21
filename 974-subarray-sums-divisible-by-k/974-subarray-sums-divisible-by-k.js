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
      // remove negative remainders
      if(rem < 0) rem += k;
      // check if the value exists in the map if it does
      // this means that there are multiples of k in the prefix sum
      // so there are subarrays that mod with k 
      res += (m[rem] || 0);
      // add to the map
      m[rem] ? m[rem]++ : m[rem] = 1;
  }
  return res;  
};
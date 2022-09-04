/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {
   // total sum 
   let sum = 0, res = 0,
   // map to store prefix sums, starting at 0 = 1
   // for the edge case that a value - k will equal exactly 0
   m = {
    0:1
   };
   for(let i of nums) {
       sum += i;
       // we have seen this subarray before 
       if(m[sum - k]) {
           res += m[sum - k]
       }
       // add the prefix sum to the map
       m[sum] ? m[sum]++ : m[sum] = 1; 
   }
   return res; 
};

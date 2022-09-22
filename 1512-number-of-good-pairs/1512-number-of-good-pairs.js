/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = (nums) => {
   let res = 0, m = {};
   for(let i = 0; i < nums.length; i++) {
       // this pair will match with all other pairs found previously
       // so add frequency to result
       if(nums[i] in m) {
         res += m[nums[i]];  
       }
       // update the map
       m[nums[i]] ? m[nums[i]]++ : m[nums[i]] = 1;
   } 
   return res;   
};
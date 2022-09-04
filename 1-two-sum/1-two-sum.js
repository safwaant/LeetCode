/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    // map to store target sum
    const res = [0, 0], m = {};
    for(let i = 0; i < nums.length; i++){
      // weve already looped through and found the number  
      if((target - nums[i]) in m){
         res[0] = m[target - nums[i]];
         res[1] = i;  
         return res; 
      } 
      // add number to hashmap
      m[nums[i]] = i;
    }
    return res;
};
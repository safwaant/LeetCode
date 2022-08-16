/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = (nums, target) => {
    const res = [0, 0], m = {};
    for(let i = 0; i < nums.length; i++){
      if((target - nums[i]) in m){
         res[0] = m[target - nums[i]];
         res[1] = i;  
         return res; 
      } 
      m[nums[i]] = i;
    }
    return res;
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = (nums) => { 
   let res = []; 
   // iterate through keeping in mind i hashes to
   // an index of i - 1 
   for(let i of nums) {
      // in case the value is negative make sure it 
      // points to a positive index using Math.abs 
      const index = Math.abs(i) - 1;
      console.log(index) 
      // we have seen this value before 
      if(nums[index] <= 0) {
         res.push(index + 1); 
      }
      // hash the value to its index by marking it as negative 
      nums[index] = -1 * nums[index]; 
   }
   return res; 
};
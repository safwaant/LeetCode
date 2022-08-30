/**
 * @param {number[]} nums
 * @return {number[]}
 */
let findDisappearedNumbers = (nums) => {
   let s = new Set([...Array(nums.length).keys()].map((cur) => cur + 1));
   nums.forEach((cur) => {
       if(s.has(cur)) {
           s.delete(cur);
       }
   });
   return [...s] 
};
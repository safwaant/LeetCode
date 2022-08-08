/**
 * @param {number[]} nums
 * @return {number[]}
 */
let runningSum = (nums) => {
   let res = [];
   nums.reduce(
      (prev, cur) => {
         res.push(prev + cur);
         return prev + cur;
      },
      0
   );
   return res;
};
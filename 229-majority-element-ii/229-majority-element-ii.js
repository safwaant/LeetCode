/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = (nums) => {
  let m = nums.reduce((m, cur) => {
     m[cur] = (m[cur] || 0) + 1;
     return m; 
  }, {});
  let check = Math.floor(nums.length / 3);
  return Object.keys(m).map(cur => Number(cur)).filter(cur => m[cur] > check);  
};
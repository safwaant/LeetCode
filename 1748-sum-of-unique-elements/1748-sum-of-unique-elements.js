/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = (nums) => {
  let map = nums.reduce((m, cur) => {
     m[cur] ? m[cur]++ : m[cur] = 1;
     return m; 
  }, {});
  let t = Object.keys(map)
      .filter(cur => map[cur] === 1)
      .map(cur => Number(cur))  
  return t.length !== 0 ? t.reduce((total, cur) => total + cur) : 0;
};
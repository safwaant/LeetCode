/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = (nums) => {
  let map = nums.reduce((m, cur) => {
     m[cur] ? m[cur]++ : m[cur] = 1;
     return m; 
  }, {});
  let t = Object.keys(map).filter(cur => map[cur] === 1);
  if(t.length === 0) {
     return 0; 
  }    
  return t.map(cur => Number(cur)).reduce((total, cur) => total + cur);
};
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
const intersection = (nums) => {
  let m = {};  
  for(let i of nums) {  
    for(let j of i) {
       m[j] ? m[j]++ : m[j] = 1;  
    }  
  }
  return Object.keys(m).filter(k => m[k] === nums.length);  
};
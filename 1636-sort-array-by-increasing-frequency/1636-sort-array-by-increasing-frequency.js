/**
 * @param {number[]} nums
 * @return {number[]}
 */
let frequencySort = (nums) => {
   let m = nums.reduce((map, cur) => {
     map[cur] ? map[cur]++ : map[cur] = 1;
     return map;  
   }, {});
   return nums.sort((a, b) => {
       // if two values have same frequency
       if(m[a] === m[b]) { 
          return b - a;
       }
       return m[a] - m[b];
   }); 
};
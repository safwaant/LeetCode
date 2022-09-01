/**
 * @param {number[]} nums
 * @return {number[]}
 */
const numberOfPairs = (nums) => {
   let res = [0, 0];
   let m = nums.reduce((map, cur) => {
      map[cur] ??= 0, map[cur]++;
      return map;
   }, {})
   
   for(let i of Object.keys(m)) {
      res[0] += Math.floor(m[i] / 2); 
      res[1] += m[i] % 2; 
   }
   return res;
};

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
   console.log(m)
   let temp = Object.keys(m);    
   for(let i of temp) {
      res[0] += Math.floor(m[i] / 2); 
   }
   res[1] = temp.filter(e => m[e] % 2 !== 0).length;
   return res;
};
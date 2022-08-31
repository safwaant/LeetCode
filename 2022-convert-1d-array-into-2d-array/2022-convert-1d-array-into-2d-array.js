/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
const construct2DArray = (original, m, n) => {
   let res = []; 
   for(let i = 0; i <= original.length - n; i+= n) {
     res.push(original.slice(i, i + n));
   }
   return res.length !== m || res[0].length * m !== original.length ? [] : res; 
};
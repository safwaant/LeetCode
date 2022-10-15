/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
const kthDistinct = (arr, k) => {
   let m = arr.reduce((m, cur) => {
       m[cur] ? m[cur]++ : m[cur] = 1; 
       return m;
   }, {});
   let res = Object.keys(m).filter(e => m[e] === 1);
   console.log(res) 
   return res[k - 1] || "";     
};
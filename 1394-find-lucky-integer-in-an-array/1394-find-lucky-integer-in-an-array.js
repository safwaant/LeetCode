/**
 * @param {number[]} arr
 * @return {number}
 */
const findLucky = (arr) => {
   let m = arr.reduce((map, cur) => {
      map[cur] ? map[cur]++ : map[cur] = 1;
      return map; 
   }, {});
   let res = Object.keys(m).filter(cur => m[cur] === Number(cur));
   return res.length === 0 ? -1 : Math.max(...res); 
};
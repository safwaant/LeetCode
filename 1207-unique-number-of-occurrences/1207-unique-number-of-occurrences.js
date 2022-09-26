/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = (arr) => {
  let m = arr.reduce((map, cur) => {
     map[cur] ? map[cur]++ : map[cur] = 1;
     return map; 
  }, {});
  let t = Object.values(m), s = new Set(t);
  return s.size === t.length;  
};
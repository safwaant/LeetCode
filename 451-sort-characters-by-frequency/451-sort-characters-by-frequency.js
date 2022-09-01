/**
 * @param {string} s
 * @return {string}
 */
let frequencySort = (s) => {
   // frequency map 
   let m = s.split("").reduce((map, cur) => {
       map[cur] ? map[cur]++ : map[cur] = 1;
       return map;
   }, {});
   // "PriorityQueue" of map by frequency
   let temp = Object.keys(m).sort((a, b) => m[b] - m[a]), res = "";
   // adding correct amount of each char to result 
   temp.forEach(cur => res = res + cur.repeat(m[cur])); 
   return res;
};
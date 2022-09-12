/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
   let m = strs.reduce((map, cur) => {
     // create the key, the sorted anagram string  
     let temp = cur.split("").sort();
     // add the current string to the key  
     map[temp] ??= [], map[temp].push(cur);
     return map;  
   }, {}); 
   return Object.values(m); 
};
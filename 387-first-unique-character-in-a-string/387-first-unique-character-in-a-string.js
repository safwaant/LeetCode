/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
   const m = {}
   for(let i of s) {
      if(!(i in m)) {
         m[i] = 0;  
      }
      m[i]++; 
   } 
    
   for(let i in m) {
       if(m[i] === 1) {
           return s.indexOf(i);
       }
   } 
   return -1;
};
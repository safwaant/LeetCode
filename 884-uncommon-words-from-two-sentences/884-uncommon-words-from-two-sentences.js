/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
const uncommonFromSentences = (s1, s2) => {
   let m = s1.split(" ").reduce((m, cur) => {
      m[cur] ? m[cur]++ : m[cur] = 1;
      return m; 
   }, {}); 
   let m2 = s2.split(" ").reduce((m, cur) => {
       m[cur] ? m[cur]++ : m[cur] = 1;
       return m;
   }, {}); 
   let res = []; 
   for(let i in m) {
      if(m[i] === 1 && !m2[i]) {
         res.push(i); 
      } 
   } 
   for(let i in m2) {
      if(m2[i] === 1 && !m[i]) {
         res.push(i); 
      } 
   }
   return res; 
};
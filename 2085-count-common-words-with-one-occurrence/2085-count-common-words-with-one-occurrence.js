/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
const countWords = (words1, words2) => {
  let m1 = words1.reduce((m, cur) => {
      m[cur] ? m[cur]++ : m[cur] = 1;
      return m;
  }, {});
  let m2 = words2.reduce((m, cur) => {
      m[cur] ? m[cur]++ : m[cur] = 1;
      return m
  }, {});
  let res = 0;  
  for(let i in m1) {
     if(i in m2 && m2[i] === m1[i] && m1[i] === 1) {
        res++; 
     } 
  }
  return res;  
};
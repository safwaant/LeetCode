/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const m = {
    I: 1, 
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500, 
    M: 1000
  };   
  if(s.length === 1) {
     return m[s[0]]; 
  } 
  let res = 0;  
  for(let i = 0; i < s.length; i++){
    const [c, n] = [s[i], s[i + 1]];
    m[c] < m[n] ? res -= m[c] : res += m[c];
  }
  return res;  
};
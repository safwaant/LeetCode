/**
 * @param {string} s
 * @return {number}
 */
const countAsterisks = (s) => {
  let arr = s.split("|").filter((cur, i) => i % 2 === 0), res = 0;
  for(let i of arr) {
    for(let j of i) {
       if(j === "*") {
           res++;
       }
    }  
  }
  return res;  
};
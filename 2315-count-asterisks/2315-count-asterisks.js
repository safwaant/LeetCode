/**
 * @param {string} s
 * @return {number}
 */
const countAsterisks = (s) => {
  let res = 0, barCount = 0;
  for(let c of s) {
    if(c === "|") {
       ++barCount; 
    } else if (c === "*" && barCount % 2 === 0) {
       ++res; 
    }      
  }
  return res;  
};
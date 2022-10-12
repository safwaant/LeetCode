/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
  let res = 0;
  while(n > 0) {
    if(n % 2) {
       res++; 
    }    
    n = Math.floor(n / 2);     
  }
  return res;  
};
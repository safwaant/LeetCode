/**
 * @param {number} n
 * @return {number}
 */
const smallestEvenMultiple = (n) => {
  if(n % 2 === 0) {
     return n; 
  } 
  return n * 2;  
};
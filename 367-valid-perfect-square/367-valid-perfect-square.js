/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = (num) => { 
   for(let i = 1; i <= num; i++) {
       if(i * i === num) {
          return true; 
       } else if(i * i > num) {
          return false; 
       }
   }
   return false;                              
};
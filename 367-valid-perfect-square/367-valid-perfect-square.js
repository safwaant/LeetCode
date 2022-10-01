/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = (num) => {
   if(num === 1) return true; 
   for(let i = 1; i <= Math.floor(num / 2); i++) {
       if(i * i === num) {
          return true; 
       }
   }
   return false;                              
};
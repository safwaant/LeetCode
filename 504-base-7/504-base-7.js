/**
 * @param {number} num
 * @return {string}
 */
const convertToBase7 = (num) => { 
   let res = "", neg = false;
   if(num < 0) {
       num = Math.abs(num); 
       neg = true;
   }
   while(num !== 0) {
       const dig = num % 7;
       num = Math.floor(num / 7);
       res = dig + res;       
   }
   if(neg) {
       res = "-" + res;
   } 
   return res ? res : "0"; 
};
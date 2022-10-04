/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
   let res = 1;
   if(n == 0) {
       return res;
   } 
   if(n < 0) {
     x =  1 / x;  
   } 
   n = Math.abs(n); 
   let div = false;
   if(n >= 2147483648) {
       div = true;
       n = Math.floor(n / 4);
   } 
   for(let i = 1; i <= n; i++) {
       res *= x;
   } 
   if(div) {
       for(let i = 0; i < 4; i++) {
           let temp = res * res;
           res = temp;
       }
   } 
   return Number(res.toFixed(5)); 
};
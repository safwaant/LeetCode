/**
 * @param {number} n
 * @return {number}
 */
let climbStairs = (n, m = {}) => {
   if(n in m) {
       return m[n];
   } 
   if(n <= 2) {
       return n === 2 ? 2 : 1;
   }  
   m[n] = climbStairs(n - 1, m) + climbStairs(n - 2, m);
   return m[n]; 
};
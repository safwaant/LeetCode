/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n, memo = {}) => { 
   // init key for the memoization obj 
   const key = m + ", " + n;
   // if this value has already been calced return it 
   if(key in memo) {
       return memo[key];
   } 
   // base cases 
   if(n === 1 && m === 1) {
      return 1; 
   }  
   if(n === 0 || m === 0) {
       return 0;
   } 
   // memoize current call and return  
   memo[key] = uniquePaths(m - 1 , n, memo) + uniquePaths(m, n - 1, memo);
   return memo[key];
};
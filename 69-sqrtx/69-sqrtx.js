/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
   if(x === 1 || x === 0) return x;  
   let l = 1, r = x, mid = 0;
   while(l <= r) {
       mid = Math.floor((l + r) / 2);
       const val = mid * mid;
       if(val > x) {
           r = mid - 1;
       } else if(val < x) {
           l = mid + 1;
       } else {
           return mid;
       }
   }
   return r;
};
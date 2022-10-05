/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
   // binary search 
   let l = 1, r = x, mid = 0;
   // iterate until both pointers are equal 
   while(l <= r) {
       mid = Math.floor((l + r) / 2);
       // value you will compare is the middle val * middle val
       const val = mid * mid;
       if(val > x) {
           r = mid - 1;
       } else if(val < x) {
           l = mid + 1;
       } else {
           return mid;
       }
   }
   // return the rightmost value if not a perfect square
   // since this will be shifted mid - 1 down after the loop
   // it will equal the the value with decimals removed 
   return r;
};
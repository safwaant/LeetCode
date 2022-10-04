/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
  if (n == 0) {
      return 1;
  }
  // negative exponents return 1 / the value  
  if (n < 0) {
      return myPow(1 / x, -n);
  }
  let res = myPow(x, Math.floor(n / 2));
  // first case exponent is odd so times it by itself before splitting
  // second case exponent is even so times it by itself only 
  return n % 2 ? res * res * x : res * res;
};
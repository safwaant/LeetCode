/**
 * @param {number} n
 * @return {boolean}
 */

let isPowerOfThree = (n) => {
   return (Math.log10(n) / Math.log10(3)) % 1 == 0;
};
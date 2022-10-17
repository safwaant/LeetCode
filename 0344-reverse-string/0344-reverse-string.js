/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
   for(let [l, r] = [0, s.length - 1]; l < r; l++, r--) {
       [s[l], s[r]] = [s[r], s[l]]
   } 
};
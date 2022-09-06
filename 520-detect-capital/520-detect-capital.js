/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = (word) => {
   const lower = word.toLowerCase(); 
   return (word === lower) || (word === word.toUpperCase()) || word === lower.split("").map((cur, i) => {
       if(i === 0) {
           return cur.toUpperCase();
       }
       return cur;
   }).join("");
};
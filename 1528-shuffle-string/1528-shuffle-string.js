/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = (s, indices) => {
   let temp = Array(s.length).fill('');
   for(let i = 0; i < s.length; i++) {
      temp[indices[i]] = s[i]; 
   } 
   return temp.join(""); 
};
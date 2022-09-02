/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = (s) => {
  // RegEx used to split the string by space  
  let temp = s.replace(/\s+/g,' ').trim().split(" ");
  return temp[temp.length - 1].length;
};
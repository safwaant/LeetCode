/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = (s) => {
   // we will store indices to the longest palindrome 
   // then run a slice at the end to return the substring 
   let resL = 0, resR = s.length - 1, len = 0; 
   const checkPalindrome = (l, r) => {
     // while this is the case we know that the substr
     // is a valid palindrome
     while(l >= 0 && r < s.length && s[l] === s[r]) {
        // check if this palindrome is longer than result
        if(r - l + 1 > len) { 
           // update the indices of the longest palindrome 
           resL = l, resR = r + 1; 
           // update length of longest palindrome 
           len = r - l + 1; 
        } 
        // move pointers 
        --l, r++; 
     }  
   }; 
    
  // go thru each char  
  for(let i = 0; i < s.length; i++) {
     // check odd length
     checkPalindrome(i, i); 
     // check even length palindromes
     checkPalindrome(i, i + 1);
  } 
  return s.slice(resL, resR);  
};
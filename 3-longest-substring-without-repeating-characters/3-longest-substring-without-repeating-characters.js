const lengthOfLongestSubstring = function(s) {
   // resultant variable 
   let max = 0;
   // sliding window, JS set keeps order of insertion
   const c = new Set();
    
   for(let l = 0, r = 0; r < s.length;){
       if(!c.has(s[r])){
        // set does not have the letter we've found a longer substring
           c.add(s[r++]);
           max = Math.max(c.size, max)
       } else {
        // set has the letter delete the first letter and move the window
           c.delete(s[l++]);
       }
   }
   return max; 
};
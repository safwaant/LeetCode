const lengthOfLongestSubstring = function(s) {
   let max = 0;
   const c = new Set();
    
   for(let l = 0, r = 0; r < s.length;){
       if(!c.has(s[r])){
           c.add(s[r++]);
           max = Math.max(c.size, max)
       } else {
           c.delete(s[l++]);
       }
   }
   return max; 
};
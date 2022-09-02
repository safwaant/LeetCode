/**
 * @param {string} text
 * @return {string}
 */
const arrangeWords = (text) => {
   let temp = text.toLowerCase().split(" ").sort((a, b) => {
     if(a.length === b.length) {
         return 0;
     }
     return a.length - b.length;  
   });
   let first = temp.shift(); 
   first = first[0].toUpperCase() + first.slice(1);
   temp.unshift(first); 
   return temp.join(" "); 
};
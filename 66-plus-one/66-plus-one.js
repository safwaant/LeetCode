/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const increment = (digits) => {
       const num = digits[i];
       digits[i] = num + 1;  
       return digits 
    }
    
   let carry = false, i = digits.length - 1; 
   if(digits[i] === 9) {
       carry = true;
       while(carry && i >= 0) {
          if(digits[i] !== 9){
             carry = false;
             increment(digits);                 
          } else {
            digits[i--] = 0;   
          }
       }
   } else {
     return increment(digits);   
   }
   if(carry) {
      digits.unshift(1); 
   }  
   return digits; 
};
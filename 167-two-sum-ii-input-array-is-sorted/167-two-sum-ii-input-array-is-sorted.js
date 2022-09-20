/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
   let [l, r] = [0, numbers.length - 1];
   while(l < r) {
     const cur = numbers[l] + numbers[r];  
     if(cur === target) {
       return [l + 1, r + 1];  
     }  
     if(cur > target) {
        --r; 
     } else if (cur < target) {
        ++l; 
     }  
   }
   return -1; 
};
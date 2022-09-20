/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
   let [l, r] = [0, numbers.length - 1];
   // effectively doing binary search on the array 
   while(l < r) {
     // current sum of left and right pointer  
     const cur = numbers[l] + numbers[r];  
     // we have foudn the target sum  
     if(cur === target) {
       // array is 1 indexed  
       return [l + 1, r + 1];  
     }  
     // sum is too large move the right pointer  
     if(cur > target) {
        --r; 
       // sum is too small move the left pointer  
     } else if (cur < target) {
        ++l; 
     }  
   }
   return -1; 
};
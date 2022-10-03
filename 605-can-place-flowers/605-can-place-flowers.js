/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
   for(let i = 0; i < flowerbed.length; i++) {
      // getting the values to the right and left of i 
      // nullish operators for beginning and end cases
      const [l, m, r] = [flowerbed[i - 1] ?? 0, flowerbed[i], flowerbed[i + 1] ?? 0];        
      // making sure you can plant if so planting                   
      if(!l && !m && !r) {
         flowerbed[i] = 1; 
         // decrement the n value         
         --n; 
      } 
   }
   // make sure to check that n < 0 for edge case 
   return n <= 0; 
};
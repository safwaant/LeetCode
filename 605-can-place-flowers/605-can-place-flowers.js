/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
   for(let i = 0; i < flowerbed.length; i++) {
      const [l, m, r] = [flowerbed[i - 1] ?? 0, flowerbed[i], flowerbed[i + 1] ?? 0];                  
      if(!l && !m && !r) {
         flowerbed[i] = 1; 
         --n; 
      } 
   }
    
   return n <= 0; 
};
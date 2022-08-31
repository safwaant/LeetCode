/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = (prices) => {
   let profit = 0;
   for(let i = 0, j = 1; j < prices.length; j++) {
       profit = Math.max(prices[j] - prices[i], profit);
       if(prices[j] < prices[i]) {
           i = j;
       }
   } 
   return profit; 
};
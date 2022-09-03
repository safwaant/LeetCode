/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
   // init current area and final resultant area 
   let res = 0, curArea = 0;
   // two pointer approach to calc the area  
   for(let l = 0, r = height.length - 1; l < r; ) {
      // r - l to calc width and get the min height to find area 
      curArea = (r - l) * Math.min(height[l], height[r]);
      // update the final area 
      res =  Math.max(res, curArea);
      // move the smaller pointer
      height[l] < height[r] ? ++l : --r;
   }
   return res; 
};
/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
    // two pointer approach
    let l = 0,
        r = height.length - 1,
        res = 0;
    // keep track of the current on both the left and right sides
    // to know what the given maximum height of water can be 
    let maxL = height[0],
        maxR = height[height.length - 1];
    
    // iterate similar to container with most water
    while (l < r) {
        // maximum left value is the bottleneck 
        // the right max right won't matter since the left max
        // MUST be the height
        if (maxL <= maxR) {
            // move left pointer so it is 1 away from the max
            l++;
            // formula to calc the water that can be stored at a single point
            // neetcode explains this part best
            let val = maxL - height[l];
            // no negative values
            if (val < 0) {
                val = 0;
            }
            // update the max left value and the amount of water trapped
            res += val;
            maxL = Math.max(height[l], maxL);
        } else {
            // the right side is the bottleneck, repeat same process as left
            r--;
            let val = maxR - height[r];
            if (val < 0) {
                val = 0;
            }
            res += val;
            maxR = Math.max(height[r], maxR);
        }
   }
   return res;
};
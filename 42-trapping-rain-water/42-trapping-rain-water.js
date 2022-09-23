/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
    let l = 0,
        r = height.length - 1,
        res = 0;

    let maxL = height[0],
        maxR = height[height.length - 1];
    while (l < r) {
        if (maxL <= maxR) {
            l++;
            let val = maxL - height[l];
            if (val < 0) {
                val = 0;
            }
            res += val;
            maxL = Math.max(height[l], maxL);
        } else {
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
}
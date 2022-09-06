/**
 * @param {number[]} arr
 * @return {number}
 */
const peakIndexInMountainArray = (arr) => {
    // binary search initialize left, right and middle pointers
   let l = 0, r = arr.length - 1, mid = Number.MIN_SAFE_INTEGER;
   // binary search template II
   while(l < r) {
     mid = Math.floor((l + r) / 2);  
     /*
     * case 1:
     * peak will occur on the left side of mid update right pointer to mid
     */
     if(arr[mid] > arr[mid + 1]) {
         // since we use l < r 
         r = mid;
     } else {
         // case 2: peak will appear on the right side of mid
         l = mid + 1;
     }
   }
   return l; 
};
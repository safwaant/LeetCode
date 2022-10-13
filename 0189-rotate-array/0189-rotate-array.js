/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
    // in case k is larger mod it to get the
    // "actual" number of reversed numbers
    k %= nums.length;
    // simple in place reversal given an index range
    const reverseArr = (l, r) => {
        while(l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++, r--;
        }
    }
   // TRICK: reverse the array to place all elements in relative
    // order that they will be in the final
   nums.reverse();
   // reverse up to k 
   reverseArr(0, k - 1);
   // reverse from k until the end (rest of the array) 
   reverseArr(k, nums.length - 1);
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
    k %= nums.length;
    const reverseArr = (l, r) => {
        while(l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++, r--;
        }
    }
   nums.reverse();
   reverseArr(0, k - 1);
   reverseArr(k, nums.length - 1);
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
   let s = new Set(nums1), s2 = new Set(nums2);
   return [...s].filter(val => s2.has(val));
};
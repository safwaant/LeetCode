/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = (nums1, nums2) => {
   let res = [];
   let s1 = new Set(nums1), s2 = new Set(nums2);
   res.push([...s1].filter(cur => !s2.has(cur)));
   res.push([...s2].filter(cur => !s1.has(cur)));
   return res; 
};
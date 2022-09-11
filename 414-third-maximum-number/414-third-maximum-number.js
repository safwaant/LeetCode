/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = (nums) => {
  nums = [...new Set(nums)];  
  console.log(nums);  
  let res = nums.length - 3 >= 0 ? nums.length - 3 : nums.length; 
  const quickselect = (l, r) => {
      const pivot = nums[r];
      let p = l - 1;
      for(let j = l; j < r; j++) {
         if(nums[j] < pivot) {
            p++;
            [nums[p], nums[j]] = [nums[j], nums[p]];  
         } 
      }
      p++;
      [nums[p], nums[r]] = [nums[r], nums[p]];
      if(p > res) {
          return quickselect(l, p - 1);
      } else if (p < res) {
          return quickselect(p + 1, r);
      }
      return nums[p];
  }
  return quickselect(0, nums.length - 1);
};
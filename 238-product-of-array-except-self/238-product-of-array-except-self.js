/**
 * @param {number[]} nums
 * @return {number[]}
 */
let productExceptSelf = (nums) => { 
   let pre = Array(nums.length), post = Array(nums.length); 
   pre[0] = nums[0]; 
   for(let i = 1; i < nums.length; i++) {
       pre[i] = pre[i - 1]  * nums[i];
   }
    
   post[post.length - 1] = nums[nums.length - 1];
   for(let i = post.length - 2; i >= 0; i--) {
       post[i] = post[i + 1] * nums[i];
   }
   
   for(let i = 0; i < nums.length; i++) {
      const preProd = pre[i - 1] ??= 1;
      const postProd = post[i + 1] ??= 1;
      nums[i] = preProd * postProd;
   } 
   return nums; 
};
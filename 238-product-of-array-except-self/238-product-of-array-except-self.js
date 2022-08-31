/**
 * @param {number[]} nums
 * @return {number[]}
 */
let productExceptSelf = (nums) => { 
    // initialize post and pre fix arrays
   let pre = Array(nums.length), post = Array(nums.length); 
    // fence post first element
   pre[0] = nums[0]; 
   // calculate the product of the ith element
   // by multiplying the i - 1th element to ith element 
   // basically product up until previous element * current element 
   // equals current elements product
   for(let i = 1; i < nums.length; i++) {
       pre[i] = pre[i - 1]  * nums[i];
   }
   // fencepost again 
   post[post.length - 1] = nums[nums.length - 1];
   // repeat the same process for postfix but in reverse this time
   for(let i = post.length - 2; i >= 0; i--) {
       post[i] = post[i + 1] * nums[i];
   }
   // calculate the product by multiplying i - 1 prefix
   // and i + 1 postfix products = ith element
   for(let i = 0; i < nums.length; i++) {
      const preProd = pre[i - 1] ??= 1;
      const postProd = post[i + 1] ??= 1;
      nums[i] = preProd * postProd;
   } 
   return nums; 
};

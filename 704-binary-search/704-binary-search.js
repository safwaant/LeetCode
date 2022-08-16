/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let search = (nums, target) => {
    function search (nums, left, right, k){
       let mid = Math.floor((left + right) / 2); 
       if(left > right){
         return -1;  
       } 
       if(nums[mid] === k){
          return mid; 
       }
       if(nums[mid] < k){
         return search(nums, mid + 1, right, k);
       } 
       if(nums[mid] > k){
         return search(nums, left, mid - 1, k);  
       } 
    }
    let res = search(nums, 0, nums.length - 1, target);
    return res;
};
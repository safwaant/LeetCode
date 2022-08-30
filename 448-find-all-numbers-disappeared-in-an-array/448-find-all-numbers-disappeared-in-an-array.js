/**
 * @param {number[]} nums
 * @return {number[]}
 */
let findDisappearedNumbers = (nums) => {
    // approach map ith values to their i - 1 locations
    // using negatives as a flag
    for(let i of nums) {
        // since this location may already have been marked with a negative
        pos = Math.abs(i) - 1;
        // mark with negative
        nums[pos] = -1 * Math.abs(nums[pos])
    }
    // return all positive results
    let res = [];
    nums.forEach((cur, i) => {
        if(cur > 0) {
           res.push(i + 1); 
        }
    });
    return res;
};
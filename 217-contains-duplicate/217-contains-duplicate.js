/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = (nums) => {
    // one liner convert to a set and check the size
    return new Set(nums).size < nums.length;
};
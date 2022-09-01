/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
let topKFrequent = (nums, k) => {
    // create a frequency map for each value
    let m = nums.reduce((count, cur) => {
      count[cur] ??= 0;
      count[cur]++;
      return count;
    }, {});
    // sort each element by the frequency and store it
    let res = Object.keys(m).sort((a, b) => m[b] - m[a]);
    return res.slice(0, k);
};
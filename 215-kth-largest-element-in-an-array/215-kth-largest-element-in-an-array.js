/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
    // the kth largest element will be k indexes away from 
    // from the end of an array sorted in increasing order
    k = nums.length - k;
    const quickselect = (l, r) => {
        // choose pivot to be end of the array
        const pivot = nums[r];
        // p will the left index that the swap will occur on
        let p = l;
        for (let j = l; j < r; j++) {
            // swap elements to fill the partition
            if (nums[j] <= pivot) {
                [nums[p], nums[j]] = [nums[j], nums[p]];
                p++;
            }
        }
        // swap the pivot in the correct position
        [nums[p], nums[r]] = [nums[r], nums[p]];
        if (p > k) {
            // element is going to be on left side of array
            return quickselect(l, p - 1)
        } else if (p < k) {
            // element is going to be on right side of array
            return quickselect(p + 1, r);
        }
        // we have found the element
        return nums[k];
    }
    return quickselect(0, nums.length - 1);
};
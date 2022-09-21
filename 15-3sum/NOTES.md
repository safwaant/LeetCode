# 3Sum
* First **sort** the array, this will make finding duplicate values easier
* Combine the approach of Two Sum II, by having a left and right pointer iterating until a sum in found (similar to binary search)
* Tricky part is to shift the left pointer if a duplicate value is found, this will automatically shift the right pointer to compensate so no duplicate triplets would exist
* [NeetCode](https://www.youtube.com/watch?v=jzZsG8n2R9A)
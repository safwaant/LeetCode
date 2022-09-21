# Subarray Sums Divisible by K
* Similar approach to [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)
* A prefix sum is used to keep track of the current sum and the sum is modded
* If the mod exists in the map it means there is a subarray such that it contains a number that is "consumed" by the % k
* [YouTube Explanation](https://www.youtube.com/watch?v=NiUsnWNwixk)
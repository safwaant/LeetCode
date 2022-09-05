# Find All Duplicates in an Array
* Trick here is **very similar to: [Find All Numbers Disappeared | Leetcode](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array)** mark a value as a negative to show you have seen it
* This is possible since all numbers are in the range `[1 .... n]` so each number hashes to an index of `[i - 1]`
* If we see a value again (meaning the value is already negative at its hash) add it to the result
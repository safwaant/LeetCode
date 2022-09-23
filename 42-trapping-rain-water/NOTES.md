# Trapping Rain Water
* Before doing this problem review or do [Container with Most Water | LeetCode](https://leetcode.com/problems/container-with-most-water/)
* Two pointers are used, and the current maximum value on the left, as well as the current maximum value on the right are kept track (the smaller one being the bottleneck)
* The smaller value is the only value that matters, since this determines the maximum height to trap water
* At each point subtract the smaller maximum from its sides current value, this will give how much water can be held at a **certain position**
* Add this value to result
* [NeetCode](https://www.youtube.com/watch?v=ZI2z5pq0TqA)
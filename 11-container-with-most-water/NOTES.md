# Container With Most Water
* Two pointer technique, the pointer that points to a smaller value is the limiting pointer
* Start with both pointers at either end maximizing width
* Traverse both pointers to the middle finding the area by taking the minimum pointer
* Shift the pointer with the smaller height, if both same height shift any one of the 2 pointers (we will shift left in this example)
* Update the area with `max(area, curArea)` every iteration
* [Neetcode](https://www.youtube.com/watch?v=UuiTKBwPgAo)
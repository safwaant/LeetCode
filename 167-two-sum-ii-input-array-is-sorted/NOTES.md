# Two Sum II
* Since the array is sorted you can use two pointers to effectively do binary search on the array with two pointers
* Move the left pointer if the sum of the left and right pointer is less than the target otherwise move the right pointer if it is greater than the target
* If the target is found return the indexes + 1 since its 1 indexed
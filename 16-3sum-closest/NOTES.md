# 3Sum Closest
* Make sure to check out 3Sum before attempting this problem, both problems are almost the same
* First sort the array then do a Two Sum II style binary search that keeps going until the `leftPtr equals the rightPtr`
* At each moment of the binary search a sum will be calculated and compared, updating the closest sum
# Subarray Product Less than K
* Sliding window, increment the window as more elements are added
* If current product is too great decrement left ptr until a product less than k is found
* Math trick to find the number of subarrays `rightPtr - leftPtr + 1` is used to calculate the number of subarrays in a window
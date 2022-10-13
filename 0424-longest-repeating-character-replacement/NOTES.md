# Longest Repeating Character Replacement
* Sliding window, but trick here is to keep track of the most frequent character in a map
* This frequent character is used to find how many replacements will be done
* Subtract `size of window - most frequent char` to get how many replacements will be needed to be done in this particular window
*  If this exceeds `k` then it isn't possible to create a substring with repeating chars, move the left pointer until this condition is true
* Increment the right ptr while the condition is true
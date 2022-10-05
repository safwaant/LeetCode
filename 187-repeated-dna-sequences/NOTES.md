# Repeated DNA Sequences
* Sliding window is the go to method here, create a window of length 10 and move it one at a time
* The value in the window will be stored in a `set` if it appears more than once then we add it to the result (similar to two sum)
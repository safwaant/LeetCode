# Remove LinkedList Elements
* First set a dummy node, this is useful if the head itself hold the value
* Keep track of two pointers `prev` and `cur` (some label this problem as a fast and slow pointer but its really two pointer)
* If the value of the `cur` pointer reaches the value to be removed keep iterating
* If a value that is not equal to the value being removed is found set previous next to point to `cur`
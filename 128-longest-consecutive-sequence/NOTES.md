# Longest Consecutive Sequence
* First convert the array to a set, since only unique values will be used in the sequence
* What we will do to check the size of a sequence is first check if no elements come before the current element, if this is the case it means that this is the start of a sequence
* Iterate through each sequence and use `max` to find the biggest sequence
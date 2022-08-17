# Floyd Cycle
The problem is unique that each array value can be interpretated as array index, or pointer to next element.
For [1, 2, 3, 4, 5, 1] a[0]=1 points to a[1] , a[1]=2 points to a[2] ... and a[5]=1, points back to a[1], forms a cycle.
​
take advantage of the above trick to detect a cycle start then return the start
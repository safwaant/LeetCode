# Remove Nth Node
A one pass solution can be done using pointers. Move one pointer fast --> n+1 places forward, to maintain a gap of n between the two pointers and then move both at the same speed. Finally, when the fast pointer reaches the end, the slow pointer will be n+1 places behind - just the right spot for it to be able to skip the next node.
​
Since the question gives that n is valid, not too many checks have to be put in place. Otherwise, this would be necessary.
​
[Good Explanation](https://leetcode.com/problems/remove-nth-node-from-end-of-list/discuss/1164542/JS-Python-Java-C++-or-Easy-Two-Pointer-Solution-w-Explanation)
[Neetcode](https://www.youtube.com/watch?v=XVuQxVej6y8tp)
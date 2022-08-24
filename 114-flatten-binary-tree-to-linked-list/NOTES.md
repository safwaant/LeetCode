# Flatten BST To LinkedList

### Approach 1:
* Use a temporary array as storage, iterate in preorder and store the elements.
* Then set root's right and left subtrees to null, and traverse through the stored preorder list, adding all values to the right of root

### Approach 2 (Optimized):
* Use an algorithm wich flattens each subtree into the larger tree
* [Neetcode](https://www.youtube.com/watch?v=rKnD7rLT0lI)
* [Discuss](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/discuss/307669/Javascript-recursive-reverse-traversal)

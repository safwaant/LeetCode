# Flatten BST To LinkedList

### Approach 1:
* Use a temporary array as storage, iterate in preorder and store the elements.
* Then set root's right and left subtrees to null, and traverse through the stored preorder list, adding all values to the right of root

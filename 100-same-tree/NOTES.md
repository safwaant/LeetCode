# Same Tree
* Do DFS simultaneously on both trees through an inorder traversal
* check at each recursive call that the values for the right nodes and left nodes are the same
* Return true as the base case, with an edge case where a node is `null` and the corresponding node is not `null`
* Return false if any of the value checks breaks
# Min Depth of Binary Tree
* Use a DFS inorder approach similar to `maximum depth of a binary tree`
* Recurse down each node stopping at a null root, returning zero
* Take the minimum of each recursive call
* the last minimum that will be returned will be the minimum depth
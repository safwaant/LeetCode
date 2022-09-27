# Maximal Network Rank
* Problem statement is confusing, but in essence **you are counting edges from each pair of nodes**
* Store nodes and edges in an adjacency list, the list will be a set for quick lookup
* First count all edges from a node, then count all edges from another node that will form a pair, if these nodes share and edge do not count it twice (check if they share an edge)
* Return the maximum of the sum of these edges
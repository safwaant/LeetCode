/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = (node) => {
    const bfs = (node, queue, visited) => {
        // dfs initialize with a value in the visited map
        visited[node.val] = new Node(node.val)
        // bfs approach
        while (queue.length !== 0) {
            // pop the current node
            const curr = queue.shift();
            curr.neighbors.forEach(neighbor => {
                // if we havent seen this node before create it in the map
                if (visited[neighbor.val] === undefined) {
                    queue.push(neighbor);
                    visited[neighbor.val] = new Node(neighbor.val);
                }
                // add a edge between this node and the neighboring node
                visited[curr.val].neighbors.push(visited[neighbor.val]);
            })
        }
        return visited[node.val];
    }
    return node ? bfs(node, [node], {}) : node;
};
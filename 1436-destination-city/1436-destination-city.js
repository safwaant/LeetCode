/**
 * @param {string[][]} paths
 * @return {string}
 */
const destCity = (paths) => {
    // dfs to find destination city
    const dfs = (node, adj) => { 
       // continue the path  
       if(adj[node] in adj) {
          return dfs(adj[node], adj);
       } 
       // destination city path found 
       return adj[node]; 
    }
    // adj list to store paths
    let adj = {};
    // create the adj list 
    for(let i of paths) {
        const [node, adjNode] = [i[0], i[1]];
        // store adjacent nodes
        adj[node] = adjNode;
    }
    // dfs to find the destination node
    for(let i in adj) {
      return dfs(i, adj)  
    }       
};
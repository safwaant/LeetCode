/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
const maximalNetworkRank = (n, roads) => {
   // create adjacency list 
   let adj = {};
   // store adjacency list in the form of 
   // a set for quick lookup (used later on) = 
   for(let i of roads){
      let [node, adjNode] = [i[0], i[1]];
      // add nodes 
      if(!adj[node]) {
         adj[node] = new Set();  
      }
      if(!adj[adjNode]) {
         adj[adjNode] = new Set(); 
      } 
      // add edges (bidirectional)  
      adj[node].add(adjNode); 
      adj[adjNode].add(node); 
   } 
   let res = 0;
   // iterate through each node and find a pair
   // with each other node comparing the number of edges
   // against the max 
   for(let i = 0; i < n; i++) {
       // find number of edges from adj list, if no edges set to 0 by default
       let cur = adj[i] ? adj[i].size : 0;
       // iterating through pair nodes
       for(let j = i + 1; j < n; j++) {
           // find number of edges from adj list, if no edges set to 0 by default 
          let curPair = adj[j] ? adj[j].size : 0; 
          // checking if both nodes share an edge so we only counting once 
          if(adj[i] && adj[i].has(j)){
             --curPair; 
          } 
          // updating the max  
          res = Math.max(cur + curPair, res); 
       }
   } 
   return res;
};
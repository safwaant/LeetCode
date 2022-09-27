/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
const maximalNetworkRank = (n, roads) => {
   let adj = {};
   for(let i of roads){
      let [node, adjNode] = [i[0], i[1]];
      if(!adj[node]) {
         adj[node] = new Set();  
      }
      if(!adj[adjNode]) {
         adj[adjNode] = new Set(); 
      } 
      adj[node].add(adjNode); 
      adj[adjNode].add(node); 
   } 
   let res = 0;
   for(let i = 0; i < n; i++) {
       let cur = adj[i] ? adj[i].size : 0;
       for(let j = i + 1; j < n; j++) {
          let curPair = adj[j] ? adj[j].size : 0; 
          if(adj[i] && adj[i].has(j)){
             --curPair; 
          } 
          res = Math.max(cur + curPair, res); 
       }
   } 
   return res;
};
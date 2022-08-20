/**
 * @param {character[][]} grid
 * @return {number}
 */
let numIslands = (grid) => {
   const [h, w] = [grid[0].length, grid.length], 
    dfs = (r, c) => {
      // check bounds 
      if(r < 0 || c < 0 || r === w || c === h || grid[r][c] === '0') {
          return;
      }
      // mark as visited  
      grid[r][c] = '0';
      // explore every direction recursively   
      dfs(r-1, c);
      dfs(r+1, c);
      dfs(r, c-1);
      dfs(r, c+1); 
   } 
   
   
   let res = 0;  
   // iterate through entire board 
   for(let r = 0; r < w; r++) {
       for(let c = 0; c < h; c++) {
           if(grid[r][c] === '1'){
               // an island is found
               res++;
               dfs(r, c);
           }
       }
   }
   return res;
};
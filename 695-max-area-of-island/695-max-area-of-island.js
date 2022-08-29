let maxAreaOfIsland = (grid) => {
  let res = 0;
  // dfs to mark the area of an island  
  const dfs = (r, c) => {
      // bounds check and visited check
      if(r < 0 || c < 0 || r === grid.length || c === grid[0].length || !grid[r][c]){
          return 0;
      }
      grid[r][c] = 0;
      return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);
  };
  // call dfs on the entire board and keep track of the current maximum  
  for (let r = 0; r < grid.length; r++) {
     for (let c = 0; c < grid[0].length; c++) {
        if (grid[r][c]) {
           const cur = dfs(r, c);
           res = Math.max(res, cur);
        }
     }
  }
  return res;
};

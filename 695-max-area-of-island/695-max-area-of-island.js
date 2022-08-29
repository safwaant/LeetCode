/**
 * @param {number[][]} grid
 * @return {number}
 */
let maxAreaOfIsland = (grid) => {
  let res = 0;
  // dfs to mark the area of an island  
  const dfs = (y, x) => {
      // bounds check and visited check
     if (y >= 0 && x >= 0 && y < grid.length && x < grid[0].length && grid[y][x]) {
        grid[y][x] = 0;
        // dfs for all other coordinates
        return 1 + dfs(y + 1, x) + dfs(y - 1, x) + dfs(y, x + 1) + dfs(y, x - 1); 
     }
     return 0;
  };
  // call dfs on the entire board and keep track of the current maximum  
  for (let y = 0; y < grid.length; y++) {
     for (let x = 0; x < grid[0].length; x++) {
        if (grid[y][x]) {
           const cur = dfs(y, x);
           res = Math.max(res, cur);
        }
     }
  }
  return res;
};
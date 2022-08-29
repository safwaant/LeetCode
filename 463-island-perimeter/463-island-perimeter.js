/**
 * @param {number[][]} grid
 * @return {number}
 */
let islandPerimeter = (grid) => {
    const checkCell = (r, c) => {
        if(r < 0 || c < 0 || r === grid.length || c === grid[0].length || !grid[r][c]) {
            return 1;
        }
        return 0;
    }
    
    
    let res = 0;
    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[0].length; c++) {
           if(grid[r][c]) {
              res += (checkCell(r + 1, c) + checkCell(r - 1, c) + checkCell(r, c + 1) + checkCell(r, c - 1))      
           }  
        }
    }
    return res;
};
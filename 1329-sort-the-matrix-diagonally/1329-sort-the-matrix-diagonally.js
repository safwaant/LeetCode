/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
   const sortArr = (mat, row, col, m, n) => {
       // traverse the matrix horizontally and store in array
       let arr = [], r = row, c = col;
       for(; r < m && c < n; r++, c++) {
           arr.push(mat[r][c]);
       }
       // sort 
       arr.sort((a, b) => a - b);
       // traverse again and change values to sorted values
       r = row, c = col;
       let i = 0;
       for(; r < m && c < n; r++, c++) {
           mat[r][c] = arr[i++];
       }
       
   } 
    
   let m = mat.length, n = mat[0].length; 
    // traverse diagonals RIGHT of the MIDDLE diagonal
   for(let col = 0; col < n; col++) {
      sortArr(mat, 0, col, m, n); 
   } 
   // traverse diagonals LEFT of the middle diagonal
   for(let row = 1; row < m; row++) {
      sortArr(mat, row, 0, m, n); 
   } 
   return mat;
};
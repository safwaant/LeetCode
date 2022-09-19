/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const checkValid = (matrix) => {
  let n = matrix.length, s = new Set();
  for(let row = 0; row < n; row++) {
      for(let col = 0; col < n; col++) {
          let [rowKey, colKey] = [`row${row},${matrix[row][col]}`, `col${col},${matrix[row][col]}`];
          if(s.has(rowKey) || s.has(colKey)) {
              return false;
          }
          s.add(rowKey).add(colKey);
      }
  }
  return true;  
};
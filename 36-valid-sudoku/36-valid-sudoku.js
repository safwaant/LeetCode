/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board, validSum = 45) => {
   let check = new Set();
   for(let row = 0; row < 9; row++) {
      for(let col = 0; col < 9; col++) {
        if(board[row][col] === '.') {
          continue; 
        }
        let [rowKey, colKey, gridKey] = [
            `row${row}${board[row][col]}`,  
            `col${col}${board[row][col]}`,
            `square${Math.floor(row / 3)}${Math.floor(col / 3)}${board[row][col]}`]; 
        if(check.has(rowKey) || check.has(colKey) || check.has(gridKey)) {
               return false;
        }
        check.add(rowKey)
            .add(colKey)
            .add(gridKey);  
      } 
   }
   return true; 
};
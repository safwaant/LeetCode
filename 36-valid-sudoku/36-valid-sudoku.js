/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board, validSum = 45) => {
   // this set will be used to check against each row, column and 
   // 3 x 3 grid  
   let check = new Set();
   // iterate through each row, col and grid  
   for(let row = 0; row < 9; row++) {
      for(let col = 0; col < 9; col++) {
        // empty value so skip  
        if(board[row][col] === '.') {
          continue; 
        }
        // create keys for each row, col, and 3 x 3 grid 
        let [rowKey, colKey, gridKey] = [
            `row${row}${board[row][col]}`,  
            `col${col}${board[row][col]}`,
            // trick for the 3 x 3 grid keys is to divide by 3 so values fall between 0 to 2
            `square${Math.floor(row / 3)}${Math.floor(col / 3)}${board[row][col]}`]; 
        // if the value has been seen before  
        if(check.has(rowKey) || check.has(colKey) || check.has(gridKey)) {
               return false;
        }
        // add it to the set  
        check.add(rowKey)
            .add(colKey)
            .add(gridKey);  
      } 
   }
   return true; 
};

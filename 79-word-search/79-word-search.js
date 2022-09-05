/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let exist = (board, word) => { 
   const [h, w] = [board.length, board[0].length],
         findWordDFS = (r, c, i) => {
            // succuessfully found all letters for the word 
            if(i === word.length) {
                return true;
            } 
            // bounds check and check to make sure the word is being made correctly 
            if(r < 0 || c < 0 || r === h || c === w || board[r][c] !== word[i]) {
                return false;  
            } 
            // keep track of letter to backtrack later 
            let temp = word[i++];
            // mark visited 
            board[r][c] = "."; 
            // run dfs on the board 
            let check = findWordDFS(r + 1, c, i) || findWordDFS(r - 1, c, i) || 
                findWordDFS(r, c + 1, i) || findWordDFS(r, c - 1, i);
            // backtrack from an incorrect call to replace the board 
            board[r][c] = temp; 
            return check; 
         }; 
   // call dfs for every cell 
   for(let r = 0; r < h; r++) {
       for(let c = 0; c < w; c++) {
          if(findWordDFS(r, c, 0)) {
              return true;
          } 
       }
   }
   return false;
    
};

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let exist = (board, word) => { 
   const [h, w] = [board.length, board[0].length],
         findWordDFS = (r, c, i) => {
            if(i === word.length) {
                return true;
            } 
            if(r < 0 || c < 0 || r === h || c === w || board[r][c] !== word[i]) {
                return false;  
            } 
            let temp = word[i++];
            board[r][c] = "."; 
            check = findWordDFS(r + 1, c, i) || findWordDFS(r - 1, c, i) || 
                findWordDFS(r, c + 1, i) || findWordDFS(r, c - 1, i);
            board[r][c] = temp; 
            return check; 
         }; 
    
   for(let r = 0; r < h; r++) {
       for(let c = 0; c < w; c++) {
          if(findWordDFS(r, c, 0)) {
              return true;
          } 
       }
   }
   return false;
    
};
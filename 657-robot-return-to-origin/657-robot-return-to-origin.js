/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = (moves) => { 
   let [x, y] = [0, 0], dir = 
       [
           [1, 0],
           [-1, 0],
           [0, -1],
           [0, 1]
       ];
   for(let i of moves) {
       // each of the stored directions
       // are applied to x and y
       switch (i) {
           case 'U':
               x += dir[0][0], y += dir[0][1];
               break;
           case 'D': 
               x += dir[1][0], y += dir[1][1];
               break;
           case 'L':
               x += dir[2][0], y += dir[2][1];
               break;
           case 'R': 
               x += dir[3][0], y += dir[3][1];    
               break;
       }
   } 
   return x === 0 && y === 0; 
};
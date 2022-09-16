/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix) => {
    // two arrays, on to keep track of whether to zero this column
    // another to keep track of whether to zero this row
    let row = new Array(matrix.length), col = new Array(matrix[0].length);

    // store whether to zero this column and row
    for (let i = 0; i < row.length; i++) {
        for (let j = 0; j < col.length; j++) {
            if (matrix[i][j] === 0) {
                row[i] = 0;
                col[j] = 0;
            }
        }
    }
    
    // zero as needed from the stored col / row array
    for (let i = 0; i < row.length; i++) {
        for (let j = 0; j < col.length; j++) {
            if (row[i] == 0 || col[j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }
};
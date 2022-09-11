# Valid Sudoku
* First validate the rows, and columns, just add them to a `Set`
* For each 3 x 3 grid there is a math trick to get the "coordinate" that each value falls under, divide the value by 3 and it will reveal with of the grids it belongs to
* The keys of each of the rows, cols, and grids must be unique, otherwise the check fails
* [NeetCode](https://www.youtube.com/watch?v=TjFXEUCMqI8)
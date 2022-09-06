/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = (triangle) => {
   // bottom up dp approach
   // start at the bottom of the triangle  
  for(let i = triangle.length - 1; i > 0; i--) {
    // use row below to update row above  
    for(let j = triangle[i].length - 2; j >= 0; j--) {
      // take the lower number at this point
      // and set it to the value in the node above
      triangle[i - 1][j] += Math.min(
        triangle[i][j],
        triangle[i][j + 1]
      );
    }
  }
  return triangle[0][0];
};
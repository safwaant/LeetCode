/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
const sortPeople = (names, heights) => {
  let m = heights.reduce((m, cur, i) => {
      m[cur] = names[i];
      return m;
  }, {}); 
  return heights.sort((a, b) => b - a).map(cur => m[cur]);  
};
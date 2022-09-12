/**
 * @param {number[]} row
 * @return {number}
 */
const minSwapsCouples = (row) => {  
  // store index of each value for a swap  
  let m = row.reduce((map, cur, i) => {
    map[row[i]] = i;
    return map  
  }, {}), res = 0;
  
  // helper method for swap, swap values and update the map with new values
  const swap = (i, j) => {
     [row[i], row[j]] = [row[j], row[i]];
     m[row[i]] = i;
     m[row[j]] = j; 
  }  
    
  // iterate couple by couple and validate then swap if needed  
  for(let i = 0; i < row.length; i+=2) {
    let first = row[i],
        // the expected couple that is next to the current person
        second = first + (row[i] % 2 === 0 ? 1 : -1);
    // expected couple does not match actual  
    if(row[i + 1] !== second) {
       res++;
       // swap the person with the actual value that should be there 
       swap(i + 1, m[second]);
    }     
  }  
  return res;  
};
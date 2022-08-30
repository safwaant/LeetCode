/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
let decode = (encoded, first) => {
  let res = Array(encoded.length).fill();
  res[0] = first; 
  res.map((cur, i) => res[i + 1] = res[i] ^ encoded[i]); 
  return res;  
};
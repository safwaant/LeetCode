/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = (x) => {
  if (x < 0) {
    return false;
  }
  let y = 0, cur = x;
  // build the number in reverse mathematically
  while (cur) {
    y *= 10; 
    y += cur % 10;
    cur = Math.floor(cur / 10);
  }
  return x === y;
};
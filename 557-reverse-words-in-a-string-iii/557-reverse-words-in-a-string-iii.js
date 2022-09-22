/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   return s.split(" ").map(cur => cur.split("").reverse().join("")).join(" ");
};
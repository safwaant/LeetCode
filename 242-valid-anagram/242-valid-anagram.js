/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    // convert to arrays and sort
    s = s.split('').sort();
    t = t.split('').sort();
    // use every callback function to verify that all characters exist in t from s
    return s.every((val, i) => val === t[i]);
};
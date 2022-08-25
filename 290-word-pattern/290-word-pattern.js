/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let arr = s.split(" "), m = {};
    if(pattern.length !== arr.length) {
        return false;
    }
    for(let i = 0; i < pattern.length; i++) {
        let check = new Set(Object.values(m));
        if(!(pattern[i] in m) && !check.has(arr[i])) {
            m[pattern[i]] = arr[i];
        } 
    }
    console.log(m)
    let check = "";
    for(let i of pattern) {
        check += m[i];
    }
    return check === arr.join('');
};
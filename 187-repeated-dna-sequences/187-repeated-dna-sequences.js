/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = (s) => {
    // bounds check
    if(s.length <= 10) {
        return [];
    }
    // set to check if value is seen
    let check = new Set();
    // results a set so we dont include duplicates
    let res = new Set();
    // sliding window of length 10
    for(let l = 0, r = 9; r < s.length; l++, r++) {
        // get the window 
        const sub = s.slice(l, r + 1);
        // check if we have seen the value already if we have
        // then add it to the result
        if(check.has(sub)) {
            res.add(sub);
        } else {
            check.add(sub);
        }
    }
    return [...res];
};
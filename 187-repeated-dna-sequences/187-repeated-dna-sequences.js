/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = (s) => {
    console.log(s.length)
    if(s.length <= 10) {
        return [];
    }
    let m = {};
    let l = 0, r = 9, res = new Set();
    while(r < s.length) {
        let sub = s.substring(l, r + 1);
        console.log(sub)
        if(sub in m) {
            res.add(sub);
        } else {
            m[sub] = 1;
        }
        l++, r++;
    }
    return [...res];
};
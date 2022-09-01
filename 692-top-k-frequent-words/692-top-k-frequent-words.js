/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
let topKFrequent = (words, k) => {
    let m = words.reduce((map, cur) => {
       map[cur] ??= 0;
       map[cur]++;
       return map;
    }, {});   
    // extra sorting criteria here
    let res = Object.keys(m).sort((a, b) => {
        if(m[b] === m[a]) {
            return a > b ? 1 : -1;
        }
        return m[b] - m[a]
    });
    console.log(res)
    console.log(m)
    return res.slice(0, k);
};
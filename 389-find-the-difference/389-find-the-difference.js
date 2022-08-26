/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
let findTheDifference = (s, t) => {
    let sM = {}, tM = {}; 
    for(let i of s) {
       if(!sM[i]) {
          sM[i] = 0;
       }
       sM[i]++ 
    }
    for(let i of t) {
       if(!tM[i]) {
           tM[i] = 0;
       }
       tM[i]++ 
    }
    for(let i in tM) {
        if(!sM[i] || tM[i] !== sM[i]) {
            return i;
        }
    }
    return "";
};
/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = (strs) => {
    let word = strs[0], check = true, res = "";
    for(let i = 0; i < word.length; i++) {
        let check = true
        for(let j = 1; j < strs.length; j++) {
            if(strs[j][i] !== word[i]) {
                check = false;
            }
        }
        if(check) {
          res += word[i];  
        } else {
          return res;
        }
    }
    return res;
};
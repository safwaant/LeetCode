/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = (strs) => {
    if(strs.length === 0) return "";
    let res = "";
    for(let i = 1; i <= strs[0].length; i++) {
        let word = strs[0].substring(0, i), check = true;
        for(let j = 1; j < strs.length; j++) {
            if(!strs[j].startsWith(word)) {
                check = false;
                break;
            }
        }
        if(check) {
          res = word  
        } else {
          return res;
        }
    }
    return res;
};
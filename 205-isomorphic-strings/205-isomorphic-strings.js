/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isIsomorphic = (s, t) => {
    if (s.length != t.length) {
      return false; 
    }
    let m = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!m.has(s[i])) {
          m.set(s[i], t[i])   
        } else if (m.get(s[i]) != t[i]) {
            // make sure no values are overriden 
            return false;
        }
    }
    // check if multiple keys map to the same value
    return new Set([...m.values()]).size == m.size  
};
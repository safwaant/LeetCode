/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
let canConstruct = (ransomNote, magazine) => {
    let m = new Array(26).fill(0);
    for(let i = 0; i < ransomNote.length; i++) {
       m[ransomNote.charCodeAt(i) - "a".charCodeAt(0)]++; 
    }
    for(let i = 0, index = Number.MAX_SAFE_INTEGER; i < magazine.length; i++) {
      m[magazine.charCodeAt(i) - "a".charCodeAt(0)]--;  
    }
    return m.every((cur) => cur <= 0);
};
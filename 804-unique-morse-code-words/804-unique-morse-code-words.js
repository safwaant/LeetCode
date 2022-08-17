/**
 * @param {string[]} words
 * @return {number}
 */
let uniqueMorseRepresentations = (words) => {
    let res = new Set();
    const morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    let cur = "";
    for(let i of words) {
       for(let j = 0; j < i.length; j++) {
         cur += morse[i.charCodeAt(j) - "a".charCodeAt(0)];  
       }  
       res.add(cur);
       cur = ""; 
    }
    return res.size;
};